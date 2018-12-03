
# Time Example

This example displays a simple clock and is based on the time example in the Elm Architecture tutorial: https://github.com/evancz/elm-architecture-tutorial

  - [`index.jsx`](index.jsx) &mdash; This React code renders some JSX and the Elm component.

  - [`Time.elm`](Time.elm) &mdash; This Elm code renders a digital clock.

The rest of the files are to get Elm and JSX and everything working together. You may want to reuse some details of this configuration in your own projects.


## Build Instructions

Run the following commands:

```bash
git clone https://github.com/evancz/react-elm-components.git
cd react-elm-components/example-elm0.19/
npm install
npm run serve
```

After downloading a bunch of stuff, this should compile `index.jsx` and `Time.elm` into `build/bundle.js`. Assuming that all succeeds, it should open `index.html` in your browser automatically.


## Alternate Build Instructions

Run the following commands:

```bash
git clone https://github.com/evancz/react-elm-components.git
cd react-elm-components/example-elm0.19/
npm install
npm run make
elm-reactor
```

And then open [http://localhost:8000/index.html](http://localhost:8000/index.html) in your browser.


## Troubleshooting

If any intructions do not work, please ask about it on [the Elm slack](http://elm-lang.org/community)! Folks there are friendly and happy to help. They can troubleshoot the problem and help find any issues with these directions.