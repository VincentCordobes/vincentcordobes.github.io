---
title: Rewrite the past in fewer steps with rebase
date: 2019-01-18
spoiler: Demistify git rebase with an interactive ascii art
thumbnail: "ascii-preview.png"
---


There are lots of commands in git and you can often achieve your goal in several different ways. I usually manage to get my stuff done with just few cmds like rebase, reset, cherry-pick. But sometimes I felt I was doing it ineffectively. Like for example squashing all commits into a single one so that it will be easier to rebase afterward. 
Even though I knew that rebasing with the ` --onto` option would be useful, I never took the time to _man_ it... until recently. I guess now is a good time to write something about it.

🌳  _I assume in this post that you have basic knowledge about git, and that you are familiar with its index, working tree as well as commands like reset and cherry-pick_

<!-- > Actually I just want to inaugurate my blog... any reason is a good reason ☝️ -->

### When can the `--onto` option be useful?

Here are some use-cases:
- you want to cherry-pick multiples commits
- you have created a branch from the wrong one and you want to bring all the commits to the right one
- you want to delete a range of commits
 
Basically it all comes down to this: **apply a range of commits somewhere else** 

### Rebase

Let's begin with a little reminder about how rebase works in its simplest form. From the _man_ (unix) we get:

<!-- ```
git rebase upstream [branch]
``` -->

<pre class="language-text">
<code class="language-text">git rebase <span style="background:#ffe5ee">upstream</span> <span style="background:#ffefc0">[branch]</span></code>
</pre>

I am gonna give some examples and intentionally avoid any short-hand way at first.

<iframe style="height:125px" scrolling="no" src="/git-rebase-figure1/"></iframe>

<!-- When you run the command `git rebase master topic` then: -->
When you run the command <code class="language-text">git rebase <span style="background:#ffe5ee">master</span> <span style="background:#ffefc0">topic</span></code> then:

0. Git performs a `checkout topic`
1. The index and working tree are reset to master. This is exactly like running `git reset --hard master` except that commits X, Y, Z are put aside for later use. Basically all commits that are in _topic_ but not in _master_ (`master..topic`)
2. Those commits are applied one by one on master. This is like _cherry-picking_ them.

Step 2 may fail applying the commits. Don't worry, be happy, you can either resolve the conflict by running `git rebase --continue` or get back to the state you left before the rebase with `git rebase --abort`

**Note** If you already are on the _topic_ branch (_HEAD_ → _topic_) then you can omit the <span style="background:#ffefc0">branch</span> arg and just type `git rebase master` (step 0 is skipped) This is a common short-hand.


### What about the `--onto` option?

The man tells us:

<!-- ```
git rebase --onto newbase upstream [branch]
``` -->

<pre class="language-text">
<code class="language-text">git rebase --onto <span style="background:#eff3c5">newbase</span> <span style="background:#ffe5ee">upstream</span> <span style="background:#ffefc0">[branch]</span></code>
</pre>

The only difference is in step 1: git hard resets to <span style="background:#eff3c5">newbase</span> instead of _upstream_.
Step 2 remains the same, commits <span style="background:#ffe5ee">upstream</span>..<span style="background:#ffefc0">branch</span> are applied. 


#### Lets take an exemple

You have created a branch _topicB_ from _topicA_  but it was a "mistake". The work on _topicB_ is totally unrelated to _topicA_ and thus doesn't depend on it. 
<iframe style="height:171px" scrolling="no" src="/git-rebase-figure2/"></iframe>
`

So naturally, you need to rectify this unfortunate mistake to make _topicB_ fork from _master_.  
To do so you can run:
```sh
git rebase --onto master topicA topicB
```

As seen previously, step 1 is hard resetting to master, step 2 is applying commits `topicA..topicB` .


#### Another exemple

I told you in the intro that we could also remove a range of commits by using this option.
Well lets say you have a branch like the one below and want to get rid of commits _F_ and _G_. 

<iframe style="height:76px" scrolling="no" src="/git-rebase-figure3/"></iframe>

You can run:

```
git rebase --onto E G I
```


Step 1 is a hard reset to _E_ and step 2 is picking `G..I`
(as a reminder _G_ is excluded: this is how `..` works in git)
_F_ and _G_ are removed.


### And the `-i` option?
The `-i` option lets you visualize commits that are concerned by the rebase and _interact_ with them.  You can _squash_, _delete_, _rename_, _edit_... basically playing with the past!!
