# JSX Expressions

## Demo

* Replace `00-practice-app/src` with [05-Ins_JSX-expressions/src](../activities/05-Ins_JSX-expressions/src)
  * What is [JSX](#JSX)
  * JSX expressions - Plain old JS expressions inside curly braces inside HTML. Compare to Handlebars (except it's rendered client-side)
  * Build and view this

### JSX

JSX stands for JavaScript XML. It is a central component to React, and allows us to (almost) write HTML in JS files.

```jsx
    const awesomeElement = <span>JSX is the best!</span>
```

is the equivalent of

```js
    const awesomeElement = React.createElement('span', {}, 'JSX is the best!')
```

## Try

* Try [06-Stu_JSX-expressions/README.md](../activities/06-Stu_JSX-expressions/README.md)
