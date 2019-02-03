---
title: One way to approach a problem
date: 2019-01-31
spoiler: Gonna talk about tdd
lang: en
draft: true 
---


Do you remember back in the days, in high school, when you were given just 4 hours to write a splendid essay but you didn't know where to start, feeling afraid of the blank page ?  

Isn't it similar in software development when you get a new feature to implement, a new problem to solve or a bug to fix? How do I find a solution to the given problem? How can I be sure that it's a good solution and it actually does what we expect it to do ?

Also, just like we want the essay to be splendid, our ultimate goal is to provide clean, robust, consistent solution. Easier said than done I hear, but it is our goal anyway!

### 💭 Before coding
There are few questions I ask myself before writting any code. What is the input? What is the action to perform? What will be the output or observable changes in my system? If we think about it, those are exactly the three composites of a test. So I guess starting be writing a test can help. I initially did not want to use the term 'testing' but you've guessed it so I won't beat around the bush.

In this post I am going to talk about TDD--Test Driven Development--as it's one of the way I often use to approch a task, problem.


### 🚦 Red-Green factor

First let me quote the three rules of TDD defined by Uncle Bob:

- You are not allowed to write any production code unless it is to make a failing unit test pass.
- You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
- You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Those rules may look a bit _strict_ and following them may not be natural at first. But let me tell you: **it's a discipline!**

I realized it the day I was pair-programming with my mate. There was that new feature, not very complex, we decided to implement in TDD. It included calculating a median.

_We first need sort the $n$ items, if I have an odd number of items then we take the middle one otherwise we take the mean of the two middle values. Easy peasy!_ I thought.

The algorithm in mind and the keyboard on hand, I was ready to code.
I jumped right into the implementation when my friend stopped me: "Wait... what are you doing? Delete that code you just wrote". Indeed, there was no red test yet. And each time I wanted to code the whole feature in one go--without the goal of making a failing test pass--my friend was there to remind me not to do so.

The ritual is:
- Write a failing test 
- Make that test pass 
- Make it clean, refactor your code while keeping the tests green 

↺ Repeat!


The red-green transition is very important. It means the code we've just written is responsible of making the test pass. The test is hooked correctly! When the code breaks, so do the test. That's also exactly the purpose of a **good test**.

So remember one thing: **all begin with a red test**.

### 🎯 The Fun


It's such a satisfaction seeing a test going from red to green. You can't imagine! Almost as much as seeing a whole feature completed. 
Except that to feel the joy, we don't need to wait for 1 day... 1 month or whatever. Baby step!


![Making the test pass is rewarding](test_pass.gif)


Ever being asked to write test 'later'? 
First, how can you be sure what you'll do 'later' will actually tests your code ? The implementation is working anyway
Secondly it's not fun! 



When that 'later' comes, you're feeling desperate because... it's not fun!! 
Where is the satisfaction of writting something 'just because" without any other purpose. The code is working anyway.  So 
Eventually they are never written. Not sure which one is worse. 
Doing TDD makes programming more fun to me.


