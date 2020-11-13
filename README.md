# Node Modules Practice

- [x] Fork and clone this repo
- [x] Initialize node in your cloned repo so it becomes a node project!

## Make your own module

- [x] Create a node module that stores an array of your favorite foods
- [x] Import that module into your `index.js`
- [x] Write code in your `index.js` so when you run your app, it loops through the array, printing all of your favorite foods to the console

## Experiment with implementing a package

- [x] Find 3 [npm](https://www.npmjs.com/) packages that look interesting
- [x] Experiment with incorporating them into this node project, just like we did with moment

## Add to your Node app instructions readme

- [x] Add notes about how to create and import node modules to your Node/Express app readme, along with instructions about adding a `.gitignore`
- [x] Paste the link to your repo in this the readme of this assignment

## Finally, .gitignore and submit a PR!

- [x] Add a `.gitignore` to this assignment, so the `node_modules` folder doesn't upload to Github
- [x] Submit this assignment by making a `pull request`

## Import Node Modules

1. First thing's first: find the module you would like to import, whether it's a core module or a third-party module. When you find one, read the documentation on how to install it. If you want to install it for a single program, your command will look something like this:

```
npm install <name of module>
```

If you want to install it globally so that all of your programs can access it, your command will look something like this:

```
npm install -g <name of module>
```

2. Once installed, you can access the module's properties and methods by adding the following line of code to your entry point file (typically `index.js`). Just be sure to replace `moduleName` with the actual name of the module you're importing:

```js
let moduleName = require('moduleName');
```

3. Now you can access the module object from your entry point file. Don't forget: when in doubt, reference the module's documentation for detailed installation instructions.

## Add a `.gitignore` File

1. Create a new file within your Node program directory. Name it `.gitignore`.

```
touch .gitignore
```

2. Inside the file, add the names of any directories or files that you want to be ignored for future Git commits. A `node_modules` directory is one example of a directory that you would want to add.

## Repository Link

[https://github.com/delayedaa/node_modules_practice](https://github.com/delayedaa/node_modules_practice)