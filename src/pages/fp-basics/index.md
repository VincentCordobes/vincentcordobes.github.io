---
title: Basics of Functional Programming
date: 2019-01-31
description: Let's talk about some fundamental functional programming principles
lang: en
draft: true
---

The essence of programming is composition.  In the OOP paradigm we are building sofware by using Object that communicates with each other. To build bigger software we compose those objects.

In FP the building block is a function! Each function operates on data.
The software is made using functions, and we compose them to build bigger software.

What is functional programming? What are those principles?
Gonna talk here about the very basics of FP using the functional language OCaml

FP see programming in a mathematical way.

Major difference between functional languages and imperative languages is

### Expression vs Statements

An expression is everything that can be evaluated to produce a value.

#### In imperative languages

Since in OCaml everything is an expression, I'm going to use javascript to highlight the differences.
Here is an example of an expression: 
```javascript
const circumference = 
   // It evaluates to a number
   2 * PI * radius 
```
On the contrary `if-else` are not expressions in javascript, meaning that you can't do that:
```javascript
// This is not a javascript valid syntax!
const res = 
  if (moi === 'Vincent') { 
    // ...
  } else {
    // ...
  }
```

Same goes for statements `for`, `while`, `switch`, `try ... catch`, `break` etc... Lot of keywords for a single language 😜 



#### And what about in FP languages ?

Previously I said everything was an expression in OCaml. But what about the  `if-else`, `for-loop`...? they exist, but those are also expressions!

`if-else` is evaluated to its body content:
```ocaml
let message = 
  if language = "ocaml" then 
    "I quite like FP" 
  else 
    "Sorry, what?"
(* val message : string *)
```
`for` and `while` loop are evaluated to the `unit` type:
```ocaml
for i = 0 to 3 do printf "%d" i done
(* unit = () *)
```
And so on.

### Immutability

An immutable variable means its value can't be changed after it's created.
If you want to modify it, well you don't. Instead you create a new variable with the new value.

In OCaml record fields are immutable by default.

```ocaml
let me = {
  first_name = "Vincent";
  last_name  = "Cordobes";
  age        = 25;
}
```

If you try to update `me`, you'll get an error:

```ocaml
me.age <- 35 (* error: the record field age is not mutable *)

```
Instead you need to create a new variable:

```ocaml
let new_me = { me with age = 35 }
```

In some other languages objects are mutables by default which can lead to many "wtf!"  
For example in javascript:
```javascript
const me = { name: 'Vince', age: 23 }
console.log(me.age) // 23
sayAge(me)
console.log(me.age) // 498
```

<div style="position:absolute;
            font-size: 25px;
            transform: translate(10em, -1.2em);">🤔</div>
<br />

Who is responsible for that age change? It must be `printAge`! It's the only function call we have between the two `console.log`. But wait... can we really trust `console.log` ? What if I tell you it's been monkey patched? Replaced by a custom bugged logger 🙈 Okay chances are low but if one is being imaginative, it's possible.
The point is that in a mutable world we can't really trust anything. As you can see even in a 4 lines program, mutability can lead to very unexpected behaviour.

So immutability guaranties us that a variable will never change.
It's not an FP specific thing but rather a best practice as it makes codes more readable and maintainable.
It also makes it easier to do concurrent programming, eliminates defensive copies etc..

Is mutability always bad tho? Of couse not and as often in IT, it depends! If it's local, effects are totally controlled or allow us to optimize a performance critical part of the program etc... **it's totally fine**.


### Pure function

1. Its result depends only on its input--and not on any external state
2. It has no side effects such as mutating a global state/reference arguments, having I/O...

→ Given the same input, it always returns the same result

This is a pure function:
```ocaml
let double x = 2 * x
```

Naturally it shouldn't call unpure code:
```ocaml
let get_week_day () =
  let now = Unix.time () |> Unix.localtime in
  now.tm_wday
```
`Unix.time` is not pure and will always returns a different result. Impurity is contagious. Thus `get_week_day` is not pure. 

There are many benefits to pure functions--easy to test, predictables, make the code easier to reason about. They also enable optimizations such as memoization, parallelization.

I believe in a program one want to maximize pure functions and push unpure code at the edge.


### Referential transparency

Let's drop some fancy jargon! Referential transparency means you can safely replace an expresssion by its value without changing the program behaviour.

Let's take the expression `x + f x`. Assuming that $x$ is immutable and $f$ is a pure function, then every time we encounter that expression in our program we could replace it by $y$ where  `let y = x + f x`


### First class function

Functions are data. It means we can pass them as arguments to other functions, return them from other functions or bind them to variables.
In this way they are treated as first-class citizens.

In OCaml we define a function *double* that takes one argument _x_ like so:
```ocaml
let double x = x * 2
```
This is actually a syntactic sugar over an anonymous function bound to a variable.
```ocaml
let double = fun x -> x * 2
```



### Higher order function

A higher order function refers to a function that can:
- take one or more functions as arguments and/or
- return a function as its result

This is **so powerful** and allow us to build common abstraction like `map`, `fold` etc.



Let's see `List.map` for example:
```ocaml
val map : ('a -> 'b) -> 'a list -> 'b list
```
It takes a function $f$ of type `'a -> 'b`, a list of `'a` and applies f to each element of that given list. The result is then a list of `'b`.

Let's say we want to double all the elements in a list:
```ocaml
let doubles = List.map (fun x -> x * 2) [1; 2; 3]
(* val doubles : int list = [2; 4; 6] *)
```
Or by using our _double_ function previously defined:
```ocaml
let doubles = List.map double [1; 2; 3]
(* val doubles : int list = [2; 4; 6] *)
```
<br />

Now let's take a look at folding `fold`--also known as `reduce`--another fundamental abstraction to walk through a list to build something new.
```ocaml
val fold_left : ('a -> 'b -> 'a) -> 'a -> 'b list -> 'a
```
To sum all the elements of a list we would do:
```ocaml
let total = List.fold_left (fun a b -> a + b) 0 [1; 2; 3]
```
Or because we are FP dudes and we do [point-free](https://en.wikipedia.org/wiki/Tacit_programming) style 😎...:
```ocaml
let total = List.fold_left (+) 0 [1; 2; 3]
```

Those two examples `map`, `fold` are so useful that they exist on many many other data types, not just lists.

We can see that both `map` et `fold_left` return the same kind of things--a list. This is quite convenient as it allows us to chain multiple operations.
```ocaml
let total =  
  [1; 2; 3]
  |> List.map double
  |> List.fold_left (+) 0 
(* val total : int = 12 *)
```
Note that `|>` is named _pipeline operator_, it pipes a value into a function. It could be defined like `let (|>) x f = f x` and is left-associative.
Alternatively, we could write the above code like that:
```ocaml
(* Inline, boouh *)
let total =  List.fold_left (+) 0 (List.map double [1; 2; 3])

(* with intermediate values *)
let doubles =  List.map double [1; 2; 3]
let total = List.fold_left (+) 0 doubles
```

Personnaly I like the pipe version, it's nice and readable and feels like the data flows through the functions. When the output of one function match the input of another, we start seeing the beauty of composition. That's what we will see right now.

### Composition

Composition means creating new _things_ by combining other _things_.
In the functional programming world, we compose functions--the building block--to make new functions.


#### The more functional Math view

build transformation pipeline in a neat way

compose smaller functions into a larger one

means input of one function must fit with the output of the other. Statically typed languages like OCaml ensure that's the case. 
otherwise we may want to leverage some techniques (functor, monad, etc) to compose them

As a function returns only one result, it also means we can compose functions that takes only one argument.
But what if the function takes multiple arguments? 
That's where currying comes into play!



`|> ` is application reversed
There is no built-in operator but we can define one like so:
```ocaml
let (<<) f g x = f(g(x));;
```


### Currying

Not talking about food here ;)

By the way, what are all those arrows in the function type signatures? Currying! 

**Currying turns a multi-parameters function into a serie of one parameter function.**

In ML languages functions are curried.
Which means the two following code are equivalents:
```ocaml
let add a b = a + b
(* val add : int -> int -> int *)

let add = (fun a -> (fun b -> a + b))
(* val add : int -> int -> int *)
```

Notice how the two signatures looks the same `int -> int -> int`.
In fact, the former is just a syntactic sugar of the latter.

It feels pretty normal for us that a function returns one and only result. If some wants to return more than one, we would use a tuple or record etc... 

Well, from a FP point of view, it is the same for arguments.
```ocaml
arg1 -> arg2 -> arg3 -> result
```
Curried functions are so easy to compose due to the one-result/one-argument. 
Look at this for example:

```ocaml
let build_door = cut_wood << chop_wood(🔨) 🌳
```
We have two functions `chop_wood` and `cut_wood` with different arities, respectively two and one.
```ocaml
let chop_wood tool trees = ...
let cut_wood wood = 
```
Thanks to currying we can compose them.





We also get partial application for free.
Which allows us to specialize a function



Let's see for example the `add` function:
```ocaml
let add a b = a + b
(* val add : int -> int -> int *)

(* when applying the first argument 5 we get
a new function expecting the 2nd argument *)
let addFive = add 5
(* val addFive : int -> int *)

(* when we give it that second argument, we get the result *)
let six = addFive 6
(* val six : int *)
```

