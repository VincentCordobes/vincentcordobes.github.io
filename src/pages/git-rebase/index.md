---
title: Demystify git rebase with animations
date: 2019-01-18
spoiler: Interactive ASCII arts to understand git rebase
thumbnail: "ascii-preview.png"
---


There are lots of commands in git and we can often achieve our goal in several different ways. I usually manage to get my stuff done with just few commands like rebase, reset, cherry-pick. But sometimes I felt I was doing it ineffectively. Like for example squashing all commits into a single one so that it will be easier to rebase afterward. 
Even though I heard that rebasing with the `onto` option could be useful, I never took the time to _man_ it... until recently. I guess now is a good time to write something about it.


<!-- > Actually I just want to inaugurate my blog... any reason is a good reason ☝️ -->

## When to use it?

Here are some use-cases:
- we want to cherry-pick multiples commits
- we have created a branch from the wrong one and we want to bring all the commits to the right one
- we want to delete a range of commits
 
Basically it all comes down to this: **apply a range of commits somewhere else** 


## Rebase

Let's begin with a little reminder about how rebase works in its simplest form. From the _man_ (unix) we get:

<!-- ```
git rebase upstream [branch]
``` -->

<pre class="language-text">
<code class="language-text">git rebase <span style="background:#ffe5ee">upstream</span> <span style="background:#ffefc0">[branch]</span></code>
</pre>

I am gonna give some examples and intentionally avoid any short-hand way at first.

<iframe style="height:125px" scrolling="no" src="/git-rebase-figure1/"></iframe>
<!-- I am gonna give some examples and intentionally  -->
<!-- I'll intentionally avoid any short-hand way at first. -->
<!-- The ASCII art schema is animated, you can click on it to go through the steps. -->
<!-- Let's say you have forked a _topic_ branch from _master B_ but master has evolve and you want to update the_topic_ branch according to master -->


<!-- When you run the command `git rebase master topic` then: -->
When we run the command <code class="language-text">git rebase <span style="background:#ffe5ee">master</span> <span style="background:#ffefc0">topic</span></code> then:

0. Git performs a `checkout topic`
1. The index and working tree are reset to master. This is exactly like running `git reset --hard master` except that commits X, Y, Z are put aside for later use. Basically all commits that are in _topic_ but not in _master_ (`master..topic`)
2. Those commits are applied one by one on master. This is like _cherry-picking_ them.

Step 2 may fail applying the commits. Don't worry, be happy, we can either resolve the conflict by running `git rebase --continue` or get back to the state we left before the rebase with `git rebase --abort`

**Note** If we already are on the _topic_ branch (_HEAD_ → _topic_) then we can omit the <span style="background:#ffefc0">branch</span> arg and just type `git rebase master` (step 0 is skipped) This is a common short-hand.


## What about the `--onto` option?

The man tells us:

<!-- ```
git rebase --onto newbase upstream [branch]
``` -->

<pre class="language-text">
<code class="language-text">git rebase --onto <span style="background:#eff3c5">newbase</span> <span style="background:#ffe5ee">upstream</span> <span style="background:#ffefc0">[branch]</span></code>
</pre>

The only difference is in step 1: git hard resets to <span style="background:#eff3c5">newbase</span> instead of _upstream_.
Step 2 remains the same, commits <span style="background:#ffe5ee">upstream</span>..<span style="background:#ffefc0">branch</span> are applied. 


#### Lets take an example

We have created a branch _topicB_ from _topicA_  but it was a "mistake". The work on _topicB_ is totally unrelated to _topicA_ and thus doesn't depend on it. 
<iframe style="height:171px" scrolling="no" src="/git-rebase-figure2/"></iframe>

So naturally, we need to fix this unfortunate mistake to make _topicB_ fork from _master_. To do so we can run:
```sh
git rebase --onto master topicA topicB
```

As seen previously, step 1 is hard resetting to master, step 2 is applying commits `topicA..topicB` .


#### Another example

I told you in the intro that we could also remove a range of commits by using this option.
Well lets say we have a branch like the one below and want to get rid of commits _F_ and _G_. 

<iframe style="height:76px" scrolling="no" src="/git-rebase-figure3/"></iframe>

We can run:

```
git rebase --onto E G I
```


Step 1 is a hard reset to _E_ and step 2 is picking `G..I`
(as a reminder _G_ is excluded: this is how `..` works in git)
_F_ and _G_ are removed.


## Let's play with the past?
The `-i` option lets us interact with any commits. We can move, squash, delete, rename, edit... It's on of the most powerful git command that allows us to do pretty much anything with the git history.
