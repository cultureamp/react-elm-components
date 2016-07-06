
# Emoji Chat Room - [Try It!](http://evancz.github.io/react-elm-components)

This example is a simple chat room that makes it easy to input emoji.

The emoji picker is an off-the-shelf React component. The chat room is written in Elm. The interesting code lives in the following two files:

  - [`index.jsx`](index.jsx) &mdash; This React code combines the emoji component and the Elm component.

  - [`Chat.elm`](Chat.elm) &mdash; This Elm code defines a simple chat room.

The rest of the files are to get Elm and JSX and everything working together. You may want to reuse some details of this configuration in your own projects.


## Build Instructions

Run the following commands:

```bash
git clone https://github.com/evancz/react-elm-components.git
cd react-elm-components/example/
npm install
npm run serve
```

After downloading a bunch of stuff, this should compile `index.jsx` and `Chat.elm` into `build/bundle.js`. Assuming that all succeeds, it should open `index.html` in your browser automatically.


## Alternate Build Instructions

Run the following commands:

```bash
git clone https://github.com/evancz/react-elm-components.git
cd react-elm-components/example/
npm install
npm run make
elm-reactor
```

And then open [http://localhost:8000/index.html](http://localhost:8000/index.html) in your browser.


## Troubleshooting

If any intructions do not work, please ask about it on [the Elm slack](http://elm-lang.org/community)! Folks there are friendly and happy to help. They can troubleshoot the problem and help find any issues with these directions.