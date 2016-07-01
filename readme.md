# react-elm

Companies that start using Elm *all* introduce it gradually. It is way less risky to replace a single component with Elm and see how it goes.

  - If it is good, do more!
  - If it is bad, go back to JavaScript. No harm done!

This library makes this low-risk exploration as easy as possible.


## Usage

After you have compiled an Elm program to JavaScript, you can embed it in React like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render()
{
  return <Elm src={Todo} />
}
```

You configure an Elm program with *flags*. For example, if your `Todo` module needed to be configured with an array of todos, you would write something like this:

```javascript
function render()
{
  var flags = { todos: ["Get Milk", "Do Laundry"] };
  return <Elm src={Todo} flags={flags} />
}
```

You communicate with Elm by sending messages through *ports*. Think of these as holes in the side of an Elm program that you can pass information though. So maybe we extend our `Todo` app to allow outsiders to send in new tasks through the `todos` port. And maybe we also expose `numPendingTodos` so that the outsider can know how much work you have left. You would set it up like this:

```javascript
function render()
{
  return <Elm src={Todo} ports={initPorts} />
}

function initPorts(ports)
{
	ports.todos.send("Invent the Universe");
	ports.todos.send("Bake an Apple Pie");

	ports.numPendingTodos.subscribe(function(n) { ... });
}
```
