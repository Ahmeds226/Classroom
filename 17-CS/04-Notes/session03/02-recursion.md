# Recursion and functional programming

## Demo

- Open [23-Ins_Recursion/index.js](../../01-Activities/23-Ins_Recursion/index.js)
  - If you're reasonably familiar with Maths, this concept is very similar to [induction](https://en.wikipedia.org/wiki/Mathematical_induction)
  - Need two things for a successful recursion/induction:
    - A starting point: typically 0, the empty string, an empty array
    - An incremental step
  - Is often used in [functional programming languages](https://en.wikipedia.org/wiki/Functional_programming)
    - Results in immutable variables
    - In languages where immutable variables are difficult/impossible, you often also don't have a `for` loop
    - Most functional languages implement [tail recursion](https://en.wikipedia.org/wiki/Tail_call) optimization so that performance is the same
    - Unfortunately, JavaScript does not optimize tail recursion, but it is coming in soon
- Functional programming
  - Academic construct coming from [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus)
  - Commonly used functional languages, or hybrid functional/OO programming languages are 'trendy', along with their major use cases
    - Haskell - telecoms
    - LISP (including Clojure) - AI
    - Groovy - DevOps
    - Kotlin - Android apps
    - F# - financial
  - Almost all modern languages (including JavaScript) have absorbed features from functional languages
  - JavaScript has some functional features, namely
    - Functions are a first class citizen
    - 'Factory' functions (called 'higher order functions')
    - Operations on arrays
  - Modern programming tends to borrow from functional concepts
    - Preference for `map` and `reduce` rather than loops
    - Avoidance of `null`
    - Immutable variables
    - If you can make the above part of your toolkit, you'll find it easier to understand modern code, as well as transfer your skills to other languages.

## Try

- Try [24-Stu_Recursion/README.md](../../01-Activities/24-Stu_Recursion/README.md)
  - How would you write this without recursion?
  - Try `fibonacci(30)`. Why is it so slow?
  - Can you write a better performant version using recursion?
