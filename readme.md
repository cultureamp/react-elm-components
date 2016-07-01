# react-elm

Companies that start using Elm *all* introduce it gradually. It is way less risky to replace a single component with Elm and see how it goes.

  - If it is good, do more!
  - If it is bad, go back to JavaScript. No harm done!

This library makes this low-risk exploration as easy as possible.


## Usage

After you have compiled an Elm program to JavaScript, you can embed it in React like this:

```javascript
import ElmComponent from 'react-elm'
import Elm from '../dist/elm/my-thing.js'

function render()
{
  return <Elm src={Elm.MyThing} />
}
```

If you have a program with flags, you can provide them like this:

```javascript
<Elm src={Elm.MyThing} flags={{ userId: 42, userName: 'Tom' }} />
```

If you have ports, you pass in a function to set them all up like normal:

```javascript
<Elm src={Elm.MyThing} ports={initPorts} />

function initPorts(ports)
{
	ports.stocks.send(1234);
	ports.buy.subscribe(function(stock) {});
}
```
