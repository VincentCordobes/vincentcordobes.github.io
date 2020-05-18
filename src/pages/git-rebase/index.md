---
title: Demystify git rebase with animations
date: 2019-01-18
description: Interactive ASCII arts to understand git rebase
thumbnail: "ascii-preview.png"
---


There are lots of commands in git and we can often achieve our goal in several different ways. I usually manage to get my stuff done with just few commands like rebase, reset, cherry-pick. But sometimes I felt I was doing it ineffectively. Like for example squashing all commits into a single one so that it is easier to rebase. 
Even though I heard that rebasing with the `onto` option could be useful, I never took the time to _man_ it... until recently. 
So what are some use cases?
- we want to cherry-pick multiples commits
- we have created a branch from the wrong one
- we want to delete a range of commits
 
Basically it all comes down to this: **apply a range of commits elsewhere** 


## Rebase

Let's begin with a little reminder about how rebase works in its simplest form. 
The _man_ gives us:

<!-- ```
git rebase upstream [branch]
``` -->

<pre class="language-text">
<code class="language-text">git rebase <span style="background:#ffe5ee">upstream</span> <span style="background:#ffefc0">[branch]</span></code>
</pre>

To illustrate this, let's take an example. `topic` has forked `master` from `B` but in the meantime a new commit—`C`—has arrived on master. To bring `topic` up to date with `master` we can run:

<pre class="language-text">
<code class="language-text">git rebase <span style="background:#ffe5ee">master</span> <span style="background:#ffefc0">topic</span></code>
</pre>



<iframe style="height:125px" scrolling="no" src="/git-rebase-figure1/"></iframe>


Here is what happens:
0. Git performs a `checkout topic`
1. The index and working tree are reset to master (`reset --hard master`) Commits in topic but not in master—namely X, Y, Z—are put aside for later use
2. Those commits are applied one by one on master. This is like "cherry-picking" them.


**Note** If we already are on the _topic_ branch (_HEAD_ → _topic_) then we can omit the <span style="background:#ffefc0">branch</span> arg and just type `git rebase master` (step 0 is skipped) This is a common short-hand.


## The `--onto` option


<!-- ```
git rebase --onto newbase upstream [branch]
``` -->

<pre class="language-text">
<code class="language-text">git rebase --onto <span style="background:#eff3c5">newbase</span> <span style="background:#ffe5ee">upstream</span> <span style="background:#ffefc0">[branch]</span></code>
</pre>

The only difference is in step 1. Git hard resets to <span style="background:#eff3c5">newbase</span> instead of _upstream_.
Step 2 remains the same, commits <span style="background:#ffe5ee">upstream</span>..<span style="background:#ffefc0">branch</span> are applied. 

This is particularly useful when we want to change the base branch.


#### Example

We have created a branch _topicB_ from _topicA_  but it was a "mistake". The work on _topicB_ is totally unrelated to _topicA_ and thus doesn't depend on it. 
To fix this unfortunate mistake and make _topicB_ fork from _master_, we can run:
```sh
git rebase --onto master topicA topicB
```

<iframe style="height:171px" scrolling="no" src="/git-rebase-figure2/"></iframe>

Step 1 is hard resetting to master, step 2 is applying commits `topicA..topicB` .


#### Removing some commits

I told you in the intro that we could also remove a range of commits by using this option.
Well, lets say we have a branch like the one below and want to get rid of commits _F_ and _G_. 

<iframe style="height:76px" scrolling="no" src="/git-rebase-figure3/"></iframe>



Step 1 is a hard reset to _E_ and step 2 is picking `G..I`
(as a reminder _G_ is excluded: this is how `..` works in git)
_F_ and _G_ are removed.


## Let's play with the past
The `-i` option lets us interact with any commits. We can move, squash, delete, rename, edit... It's on of the most powerful git command that allows us to do pretty much anything with the git history.
