# Introduction to Computer Science and execution contexts

## Demo

- Open the [slide deck](https://docs.google.com/presentation/d/16vSjLoHs48HwxdQIc5V67tvhW9f-VZBxElEY2nltVgA/edit?usp=sharing) and follow these prompts on the corresponding slides:
- Open [01-Ins_Global-Execution-Context/index.html](../../01-Activities/01-Ins_Global-Execution-Context/index.html)
  - `main()` 'default' function, and the Global Execution Context
    - Execution contexts are used for storing information that is available in the current execution
  - The call stack
    - What's a stack?
    - What's a queue?
  - `confirm`, `alert` etc are part of the _web API_
  - Manually 'run' the code
- Open [03-Ins_Functional-Execution-Context/assets/js/script.js](../../01-Activities/03-Ins_Functional-Execution-Context/assets/js/script.js)
  - When calling a method of an object, `this` refers to the object it was called from.
  - What happens to `this` if we refactor `myFuncB` to use an arrow function?
  - What happens to the value of `this` in `myFuncA` if we add `use strict`?

## Try

- Try [02-Stu_Global-Execution-Context/README.md](../../01-Activities/02-Stu_Global-Execution-Context/README.md)
- Try [04-Stu_Functional-Execution-Context/README.md](../../01-Activities/04-Stu_Functional-Execution-Context/README.md)
