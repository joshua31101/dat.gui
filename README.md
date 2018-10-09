# dat.GUIXR
A flexible GUI for changing variables 
A lightweight graphical user interface for changing variables in JavaScript.

dat.GUIXR is built on top of [dat.GUI](https://github.com/dataarts/dat.gui) and [dat.GUIVR](https://github.com/dataarts/dat.guivr) to support 2D and 3D platforms with a single add-on. 

Get started with dat.GUIXR by reading the [2D tutorials](http://workshop.chromeexperiments.com/examples/gui) and [VR tutorials](https://workshop.chromeexperiments.com/examples/guiVR)
or the [API documentation](API.md).


## Packaged Builds
After the built, include the following code in your `head` tag:
```html
<script type="text/javascript" src="bundle.js"></script>
```


## Directory Contents

```
├── build - Compiled source code.
├── src - Source files.
└── tests - Tests.
```

## Building your own dat.GUI

In the terminal, enter the following:

```
$ npm install
$ npm run build
```

## npm scripts

- npm run build - Build development and production version of scripts.
- npm run dev - Build development version of script and watch for changes.


## Working with Content Security Policy
If you're using a server with a Content Security Policy in place that blocks 'unsafe-inline', you will have problems when dat.gui.js tries to inject style information. To get around this, load 'build/dat.gui.css' as an external style sheet.


## Thanks
The following libraries / open-source projects were used in the development of dat.GUIXR:
 * [dat.GUI](https://github.com/dataarts/dat.gui)
 * [dat.GUIVR](https://github.com/dataarts/dat.guivr)
 * [Rollup](https://rollupjs.org)
 * [Sass](http://sass-lang.com/)
 * [Node.js](http://nodejs.org/)
 * [QUnit](https://github.com/jquery/qunit) / [jquery](http://jquery.com/)
