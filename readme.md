# react-elm

If you want to use Elm at work, you *must* introduce it gradually. Every company I know that uses Elm started by converting a single component as a test.

This library makes this kind of low-risk exploration super easy!


## Basic Usage

After you have compiled an Elm program to JavaScript, you can embed it in React like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render()
{
	return <Elm src={Todo} />
}
```


## Flags

Sometimes you want to give your Elm program some **flags** on start up. For example, maybe your `Todo` module needs to get an array of todos. You would write something like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render()
{
	var flags = { todos: ["Get Milk", "Do Laundry"] };
	return <Elm src={Todo} flags={flags} />
}
```

These flags will be given to the Elm program, allowing you to do some setup work in JS first.

**Note:** Once `flags` has been used to initialize the component, it will never be used again. Changing this property will have no effect. If you want to reinitialize your Elm component, you can add a different `key` to the old and new components so the old one is destroyed and replaced by the new one.


## JavaScript/Elm Interop

As your Elm program gets fancier, you will probably need to interact with JavaScript. We do this with [**ports**](http://guide.elm-lang.org/interop/javascript.html). Think of these as holes in the side of an Elm program that let you pass messages back-and-forth.

So maybe we extend our `Todo` app to allow outsiders to register new tasks through the `todos` port. And maybe we also expose `numActiveTodos` so that the outsider can know how much work you have left. You would set it up like this:

```javascript
import Elm from 'react-elm'
import { Todo } from '../dist/elm/todomvc.js'

function render()
{
	return <Elm src={Todo} ports={initPorts} />
}

function initPorts(ports)
{
	ports.numActiveTodos.subscribe(function(n) {
		console.log(n);
	});

	ports.todos.send("Invent the Universe");
	ports.todos.send("Bake an Apple Pie");
}
```

In the `initPorts` function, we first subscribe to the `numActiveTodos` port. Whenever the number of active todos changes, we will run that function and log the number on the console. After that, we send two values through the `todos` port. This will add both of these into the model *and* trigger the `numActiveTodos` callback twice.

**Note:** Once the `ports` function has been used to initialize the component, it will never be used again. Providing a new function does nothing. If you want to change your ports, you should save the `ports` object into your `state` so you can mess with it later.
