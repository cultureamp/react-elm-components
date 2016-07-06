# Writing React components in Elm

Companies that use [Elm](http://elm-lang.org/) in production usually start by converting a single component, so **this package makes it easy to write React components in Elm.** Start with a small experiment. See how you like it. If it is great, do more! If it sucks, do less!


# Usage

After you have compiled an Elm program to JavaScript, you can embed it in React like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render() {
	return <Elm src={Todo} />
}
```


### Flags

Sometimes you want to give your Elm program some **flags** on start up. For example, maybe your `Todo` module needs to get an array of todos. You would write something like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render() {
	var flags = { todos: ["Get Milk", "Do Laundry"] };
	return <Elm src={Todo} flags={flags} />
}
```

These flags will be given to the Elm program, allowing you to do some setup work in JS first.

**Note:** Once `flags` has been used to initialize the component, it will never be used again. Changing this property will have no effect. If you want to reinitialize your Elm component, you can add a different `key` to the old and new components so the old one is destroyed and replaced by the new one.


### JavaScript/Elm Interop

As your Elm program gets fancier, you will probably need to interact with JavaScript. We do this with [**ports**](http://guide.elm-lang.org/interop/javascript.html). Think of these as holes in the side of an Elm program that let you pass messages back-and-forth.

So maybe we extend our `Todo` app to allow outsiders to register new tasks through the `todos` port. And maybe we also expose `numActiveTodos` so that the outsider can know how much work you have left. You would set it up like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render() {
	return <Elm src={Todo} ports={setupPorts} />
}

function setupPorts(ports) {
	ports.numActiveTodos.subscribe(function(n) {
		console.log(n);
	});

	ports.todos.send("Invent the Universe");
	ports.todos.send("Bake an Apple Pie");
}
```

In the `setupPorts` function, we first subscribe to the `numActiveTodos` port. Whenever the number of active todos changes, we will run that function and log the number on the console. After that, we send two values through the `todos` port. This will add both of these into the model *and* trigger the `numActiveTodos` callback twice.

**Note:** Once the `ports` function has been used to initialize the component, it will never be used again. Providing a new function does nothing. If you want to change your ports, you should save the `ports` object into your `state` so you can mess with it later.


# Example

[**Demo**](http://evancz.github.io/react-elm) / [**Code**](example)

The `example/` directory contains an Emoji Chat Room. The emoji picker is an off-the-shelf React component. The chat room is written in Elm. This example uses flags and ports so you can see all parts of this library in action.


# Angular, Ember, etc.

If you want to embed Elm in Angular or Ember or whatever else, you are in luck!

[The implementation](index.js) is under 20 lines, mostly React-related. The important lines are basically running the following program at the correct time:

```javascript
var Elm = require('../dist/elm/todomvc.js');
var app = Elm.Todo.embed(node, flags);
setupPorts(app.ports)
```

So if you are interested in embedding Elm in something else, do the same trick! You can get more complete docs on embedding Elm in HTML [here](http://guide.elm-lang.org/interop/html.html) and JavaScript interop [here](http://guide.elm-lang.org/interop/javascript.html). Let the community know if you make something!
