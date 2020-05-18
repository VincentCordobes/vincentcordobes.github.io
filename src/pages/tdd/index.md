---
title: A way to approach a problem
date: 2019-01-31
description: My take on TDD
lang: en
draft: true
---

Do you remember back in the days, in high school, when you were given just 4 hours to write a splendid essay but you didn't know where to start, feeling afraid of the blank page?

Isn't it similar in software development when you get a new feature to implement, a new problem to solve or a bug to fix? How do we find a solution to the given problem? How to be sure that it's a good solution and it actually does what we expect it to do?

Also, just like we want the essay to be splendid, our ultimate goal is to write reliable and maintainable code. Easier said than done, I hear, yet it is our goal.

### 💭 Before coding

Before getting started, there are few questions I ask myself. What's the input? What's the action to perform? What's the expected output or observable changes in my system? If we think about it, those are exactly the three parts of a test. So starting by writing a test might help. I initially did not want to use the term 'testing' but you've guessed it so I won't beat around the bush.

In this post I am going to talk about TDD--Test Driven Development--as it's one of the way I often use to approch a task, problem.

### 🚦 Red-Green factor

First let me quote the three rules of TDD defined by Uncle Bob:

- You are not allowed to write any production code unless it is to make a failing unit test pass.
- You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
- You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

These rules may look a bit strict and following them may not be natural at first. But let me tell you: **it's a discipline!**

I realized it the day I was pair-programming with my mate. There was a new feature—not very complex per se—we decided to write in TDD. Let's say it was about calculating a median of $n$ values.

_We first have to sort the $n$ values. If we have an odd number of items then we take the middle one, otherwise we take the mean of the two middle values. Easy peasy,_ I thought.

The algorithm in mind and the keyboard on hand, I was ready to code.
I jumped right into the implementation when my friend said, "Wait... what are you doing?"

"Hmm I am writing the code for the new feature..." I said, proud of me.

"Where is the red test?" he was looking at me smiling, "Delete that code you just wrote!"

So I obeyed like a docile Alaskan husky. My friend was right, there was no failing test. Yet, it's the first step of TDD. After that, each time I couldn't resist coding the whole feature in one go—without the goal of making a failing test pass—my mate was there to remind me not to do so.

The 'ritual' is:

- Write a failing test
- Make that test pass
- Make it clean, refactor your code while keeping the tests green

↺ Repeat!

The red-green transition is very important. The code we just wrote is responsible of making the test pass. It means the test is hooked correctly. When the code breaks, so do the test. This is exactly the purpose of a **good test**.

So remember one thing: **all begin with a red test**.

### 🎯 The Fun

It's such a satisfaction seeing a test going from red to green. Almost as much as seeing a whole feature working as expected.
We get a much quicker feedback—no need to wait for days, months or whatever. It's all baby step!

![Making the test pass is rewarding](test_pass.gif)


It helps a lot to break down a problem. 

---

"You will write tests later!" have you ever been told this?

First, how can we be sure that what we will do 'later' will actually tests your code? The implementation is working anyway.

Secondly it's not fun!

When that 'later' comes, you're feeling desperate because... it's not fun!!
Where is the satisfaction of writting something "just because" without any other purpose.

The code is working anyway. So what might happen is that the test might not fail when the code is actually broken. Or the test will fail whenever you refactor your code without whanging its behaviour. In this case, that test is not usefull and it will even slow down your development processs. Touching the code becomes a pain. So not only it's useless but they are harming. Those tests are bad.
I've noticed it's a lot easier to write bad test afterward.
Doing TDD makes programming more fun to me.
