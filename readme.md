# abecedary

abecedary is a client side JavaScript executor API that allows for non-opinionated testing within the sandbox. It is not feature complete the Code Schools [kraken-clientsideexecutor](https://github.com/codeschool/kraken-clientexecutor), but aims to provide the same functionality.

> abecedary
> n.  1.  A primer; the first principle or rudiment of anything.

# Setup

This repo is a crazy mixture of various parts that should still be split out into their own components. Here's a quick description of them:

## lib/abecedary

This is the core component which will be split out into its own repository. It can't be built standalone at the moment, but will be able to once split out.

## lib/boot

Contains the setup for running a sample test suite using abecedary.


# Building

Until split, the out the build step is somewhat confusing here due to the number of assets.

This will pull down and build `build/*.[js,css]` assets that are used outside of the iFrame for the demo application.

```
$ component install
$ component build
```

To build the JavaScript used within the iFrame (which contains mocha, sinon and a number of other testing libraries), you'll need to do a few more steps

```
$ npm install
$ browserify -r sinon -r chai -r jquery-browserify -r esprima-jquery-map -o build/sandbox_vendor.js
$ grunt
```

This will pull down all external dependencies, build the `build/sandbox_vendor.js` file with all of these scripts able to be `require`'s at a high level, and then use `grunt` to concatenate this file with mocha and the mocha custom reporter.

# Running

Install the `serve` gem, and run serve to serve this directory on port 4000.

```
$ gem install serve
$ serve
```

Open up [http://localhost:4000](http://localhost:4000) and you should see 2 CodeMirror panes up and running!