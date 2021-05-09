# Game of Life Engine

I'm planning to build the game of life application. I have tried it twice before, in Java and then in Golang. This time I plan to try it in TypeScript and also see a visual representation of it ;) :D

The plan is to create an engine first, kind of like a game engine, which knows how the game of life works. And then create a UI separately :)

I have to see how to import the engine in the UI project. As a external npm package by publishing it on npm registry or by importing it locally. However this is just an experiment, so I'll start small I guess.

For the engine and UI - I plan to use TypeScript. For UI - I plan to use React with TypeScript

I wanted to create the engine separately so that the UI can be changed with ease later or more UIs can be created with same engine behind the scenes.

Surely many would have built this. I have also seen articles about the same when I wanted to check who has done it before. I wasn't surprised to see many doing it.

I'm just doing this for fun and to see visually how good it looks as previously I had only create a simple command line interface UI which simply showed which cells are alive and which cells are not alive.

I recently learned a lot in React and TypeScript. I figured I could put some skills to use and write some nice code with tests and see how to build this beautiful system iteratively :)

## Game Engine Story

For now I'm putting all the code in this one directory. I'll later move it all into a separate directory called "engine" or "game-engine"

Now, I'm adding TypeScript to the project

I need to configure the TypeScript compiler and I think `tsconfig.json` is an easy way to do it

I'm checking this site

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

I have used tsconfig.json before but mostly in a blind manner. I think I can use the bases concept this time

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases

But I want my engine to be able to work as a library in a Node or even in a browser project, hmm. I'll have to check what's the target output I'm looking for and what kind of support I'm looking for

Recommended base config looks like a nice option actually

https://github.com/tsconfig/bases/

https://github.com/tsconfig/bases/#recommended-tsconfigjson

https://github.com/tsconfig/bases/blob/master/bases/recommended.json

https://www.npmjs.com/package/@tsconfig/recommended

I'm checking what the config options mean using this

https://www.typescriptlang.org/tsconfig

The recommended tsconfig is

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Recommended"
}
```

Target - https://www.typescriptlang.org/tsconfig#target

It's apparently the final output JS code version. The recommended value is `ES6` which is the same as `ES2015`. I think it's good. But yeah, only modern browsers can understand the `ES6` language, very older ones cannot

Module - https://www.typescriptlang.org/tsconfig#module

This defines the module system for the program it seems. And common js looks good. I mean, it has `require` which is what I have used when I haven't used `import`. Others, it's a bit weird to even read but I have heard of them. Clearly ESNext and ES2020 are too advanced

Strict - https://www.typescriptlang.org/tsconfig#strict

Apparently setting this to true will guarantee strong type checks. Makes sense

esModuleInterop - https://www.typescriptlang.org/tsconfig#esModuleInterop

There's a lot of explanation that I'm finding hard to understand but it's talking about how there are some wrong assumptions when this setting is false and how it can cause issues. And the recommended value is true and that's what has been put in the recommended tsconfig

skipLibCheck - https://www.typescriptlang.org/tsconfig#skipLibCheck

Recommended value is true it seems and it's to skip type checking of all the declaration files and instead type check only the types we specifically refer to in our app's code

forceConsistentCasingInFileNames - https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames

Okay, this is about case sensitivity of file names in different Operating systems and how it relates to developers importing the files in the Js code. It tries to ensure that the disk file name and code import file name are the same. Hmm. Makes sense!

Now I'm trying to run the TypeScript compiler but I still get errors

```bash
$ npx tsc
Version 4.2.4
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 --pretty                                           Stylize errors and messages using color and context (experimental).
 --all                                              Show all compiler options.
 -v, --version                                      Print the compiler's version.
 --init                                             Initializes a TypeScript project and creates a tsconfig.json file.
 -p FILE OR DIRECTORY, --project FILE OR DIRECTORY  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.
 -b, --build                                        Build one or more projects and their dependencies, if out of date
 -t VERSION, --target VERSION                       Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
 -m KIND, --module KIND                             Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'es2019' 'es2020' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'webworker.iterable' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.asyncgenerator' 'es2018.asynciterable' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'es2019.array' 'es2019.object' 'es2019.string' 'es2019.symbol' 'es2020.bigint' 'es2020.promise' 'es2020.sharedmemory' 'es2020.string' 'es2020.symbol.wellknown' 'es2020.intl' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint' 'esnext.string' 'esnext.promise' 'esnext.weakref' 
 --allowJs                                          Allow javascript files to be compiled.
 --jsx KIND                                         Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'.
 -d, --declaration                                  Generates corresponding '.d.ts' file.
 --declarationMap                                   Generates a sourcemap for each corresponding '.d.ts' file.
 --sourceMap                                        Generates corresponding '.map' file.
 --outFile FILE                                     Concatenate and emit output to single file.
 --outDir DIRECTORY                                 Redirect output structure to the directory.
 --removeComments                                   Do not emit comments to output.
 --noEmit                                           Do not emit outputs.
 --strict                                           Enable all strict type-checking options.
 --noImplicitAny                                    Raise error on expressions and declarations with an implied 'any' type.
 --strictNullChecks                                 Enable strict null checks.
 --strictFunctionTypes                              Enable strict checking of function types.
 --strictBindCallApply                              Enable strict 'bind', 'call', and 'apply' methods on functions.
 --strictPropertyInitialization                     Enable strict checking of property initialization in classes.
 --noImplicitThis                                   Raise error on 'this' expressions with an implied 'any' type.
 --alwaysStrict                                     Parse in strict mode and emit "use strict" for each source file.
 --noUnusedLocals                                   Report errors on unused locals.
 --noUnusedParameters                               Report errors on unused parameters.
 --noImplicitReturns                                Report error when not all code paths in function return a value.
 --noFallthroughCasesInSwitch                       Report errors for fallthrough cases in switch statement.
 --types                                            Type declaration files to be included in compilation.
 --esModuleInterop                                  Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.
 @<file>                                            Insert command line options and files from a file.
```

Oops, I didn't add any tsconfig.json . Let me go do that first! 🤦

Okay, after adding the tsconfig.json with just `extends`, I got this

```bash
$ npx tsc
error TS18003: No inputs were found in config file '/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/tsconfig.json'. Specified 'include' paths were '["**/*"]' and 'exclude' paths were '[]'.


Found 1 error.
```

I'm looking at the tsconfig.json from another project

https://gitlab.com/snapping-shrimp/cocreate-remote-vscode/-/blob/main/tsconfig.json

```json
$ cat tsconfig.json 
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "out",
    "lib": ["es6"],
    "sourceMap": true,
    "rootDir": "src",
    "strict": true /* enable all strict type-checking options */,
    "typeRoots": ["./types-overrides", "./node_modules/@types"]
    /* Additional Checks */
    // "noImplicitReturns": true, /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true, /* Report errors for fallthrough cases in switch statement. */
    // "noUnusedParameters": true,  /* Report errors on unused parameters. */
  },
  "exclude": ["node_modules", ".vscode-test", "src/**/*.test.ts"]
}
```

I think I'll go add the `rootDir`. https://www.typescriptlang.org/tsconfig#rootDir

Apparently that's more of a file structuring thing and is not related to what files are included as part of compilation.

I think the issue is that there are no TypeScript files, not sure. I'm gonna check.

While checking root directory, I also checked a bit about source map.

source map - https://www.typescriptlang.org/tsconfig#sourceMap

I haven't added source map as of now. Maybe I'll add later if I need it.

Back to TypeScript compiler error -

Okay, I added a file called `GameOfLife.ts` in the root of the project and ran the TypeScript compiler and it worked with no errors! :) and I got an output file in the project root directory called `GameOfLife.js`! :D

When I moved the file to `src` directory, the js files got created in the same `src` directory. So, I plan to put it all in a `dist` directory for output using outDir config

https://www.typescriptlang.org/tsconfig#outDir

Okay! Things work now!! :D

```bash
$ npx tsc

$ tree dist/
dist/
└── GameOfLife.js

0 directories, 1 file

$ tree src/
src/
└── GameOfLife.ts

0 directories, 1 file
```

I'm also git ignoring the `dist` directory

I'm adding tasks in the repo project

I need to add Jest testing framework

And then read about Game Of Life and recall some stuff - rules , patterns

https://duckduckgo.com/?q=conways+game+of+life&t=ffab&ia=web

https://en.wikipedia.org/wiki/Conway's_Game_of_Life

and then start writing tests and some code! :)

I'm not gonna be adding Linters like ESLint and Formatters like Prettier for now. I'll do that later. And then maybe also add the fancy pre commit and pre push hooks to run lints, formatters, checks, tests etc in the future

Now let's get to adding Jest test framework. It should be pretty easy I think! :)

https://jestjs.io/

https://jestjs.io/docs/getting-started

I tried using

```bash
$ npm install --save-dev jest

$ npx jest --init
```

And it created a very big file. I'm just going to use a small file and I think the config is the same as another project I have with Jest

https://gitlab.com/snapping-shrimp/cocreate-remote-vscode/-/blob/main/jest.config.js

It just has an extra ts-jest for TypeScript usage in Test code with type checking

https://jestjs.io/docs/getting-started#using-typescript

So I'll need that too!

I don't think I'll need babel if I use ts-jest. So I'm gonna try it out! :)

```bash
$ npm i -D @types/jest
```

https://github.com/kulshekhar/ts-jest

https://kulshekhar.github.io/ts-jest/

https://kulshekhar.github.io/ts-jest/docs/

https://kulshekhar.github.io/ts-jest/docs/getting-started/installation

```bash
$ npm i -D ts-jest
```

I need to add `preset` as `ts-jest`

I tried `npx ts-jest config:init` but it didn't work. It instead created a JavaScript Jest config file instead of modifying the TypeScript Jest config file

https://kulshekhar.github.io/ts-jest/docs/getting-started/presets

I created a dummy test file with a dummy test. I'm trying to run the Jest command to run the test

```bash
$ npx jest
Error: Jest: Failed to parse the TypeScript config file /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/jest.config.ts
  Error: Jest: 'ts-node' is required for the TypeScript configuration files. Make sure it is installed
Error: Cannot find module 'ts-node'
Require stack:
- /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-config/build/readConfigFileAndSetRootDir.js
- /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-config/build/index.js
- /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-cli/build/cli/index.js
- /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-cli/bin/jest.js
- /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest/bin/jest.js
    at readConfigFileAndSetRootDir (/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-config/build/readConfigFileAndSetRootDir.js:150:13)
    at async readConfig (/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-config/build/index.js:217:18)
    at async readConfigs (/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-config/build/index.js:406:26)
    at async runCLI (/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/@jest/core/build/cli/index.js:230:59)
    at async Object.run (/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/node_modules/jest-cli/build/cli/index.js:163:37)
```

Oops, I missed to install `ts-jest` I think

No, I missed to install `ts-node` it seems

I think this is because I used a TypeScript configuration file for Jest. Right :P

```bash
$ npm i -S ts-node
```

It works!! :D

```bash
$ npx jest
 PASS  src/GameOfLife.test.ts
  Game Of Life
    ✓ dummy test (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.694 s
Ran all test suites.
```

Yay! :D

Oops, I need to make typescript AND ts-node as dev dependencies

---

Okay, since I added a `ts` file in the root of the project, I need to mention
that only the `src` files need to be considered for compilation I think and also mention the same for root directory. Currently it looks like this -

```bash
$ npx tsc

$ tree dist/
dist/
├── GameOfLife.js
├── jest.config.js
└── src
    ├── GameOfLife.js
    └── GameOfLife.test.js

1 directory, 4 files
```

I knew I had to use just Js and not Ts. Anyways, I'll just do something about this

When I include `src` as the `rootDir`, I get this -

```bash
$ npx tsc
error TS6059: File '/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/jest.config.ts' is not under 'rootDir' '/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by include pattern '**/*' in '/Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/tsconfig.json'


Found 1 error.
```

Maybe I could exclude it? Exclude the jest config file

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "rootDir": "src"
    },
    "exclude": ["jest.config.ts"],
    "extends": "@tsconfig/recommended/tsconfig.json"
}
```

Okay, I have done that

```bash
$ npx tsc

$ tree dist/
dist/
├── GameOfLife.js
└── GameOfLife.test.js

0 directories, 2 files
```

I also need to exclude test files

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "rootDir": "src"
    },
    "exclude": ["jest.config.ts", "src/**/*.test.ts"],
    "extends": "@tsconfig/recommended/tsconfig.json"
}
```

Okay! Things are better now! :)

```bash
$ npx tsc

$ tree dist/
dist/
└── GameOfLife.js

0 directories, 1 file
```

---

Now I'm reading the game of life wikipedia - [link](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)

I'm going to start writing tests with these [example patterns](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns)

And the [rules](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules) are pretty clear

For the code, I was thinking of having a Generation class which has a method to go to next generation and then a sugar coat method to go to a future generation given the number of ticks / evolutions

I can have a constructor to create a Generation and then call next on it to get the next generation

Or I can go functional and try to use functions which take a generation and then give the next generation as output, same for future generation with an extra input for number of ticks. Hmm

I think I'll go with Object Oriented for now and write methods. It can be changed later if needed :)

I just wanna follow - make it work, make it beautiful, make it fast. So, let's get started!

For cells, I was planning to have a set of cells. I guess it makes sense to have a set. I have seen solutions before :P So I know that a set can be useful because the cell coordinates (x, y) cannot be duplicated in the list of cells, if no duplication is possible or allowed, then we can go with a set 🤷 instead of a list

Previously I have worked with lists and done a lot of things. But I don't remember much now. I guess I'm going to try to solve from scratch as I don't remember much though I do remember some people showing just a few lines of code in Clojure and other functional languages to solve this problem! 😮

Anyways, getting back to the code!

I'm writing tests now, which compile but fail

I'm thinking how to represent a grid now. I mean, I know that it's a 2D grid so I can use X and Y coordinates. Apparently the Game Of Life is an infinite grid. How do I mention the alive cells in this?

Oh yes, I need to take only alive cells as input for generation I think. It doesn't make sense to take any extra input!

In an infinite grid, I'm wondering how to give input. Hmm

Something to note is - I have noticed some folks mentioning to consider it an infinite grid and to consider the corners and edges of the grid connecting to the other side in a wrapped manner and hence to let the alive cells moving towards the bottom will wrap and come from the top. It's more like a finite grid with wrapped edges and corners.

I'm guessing for now I'll just work with an infinite grid and I can surely give an input with the origin - (0, 0) where X and Y are 0 and 0! :)

Even though I'm using `Set`s, I'm not exactly getting the features of a set

```
Set(4) {
      Cell { x: 0, y: 0 },
      Cell { x: 1, y: 0 },
      Cell { x: 0, y: 1 },
      Cell { x: 1, y: 0 }
    }
```

I'm using `Set<Cell>` and it's not checking if two cells are equal. It simply checks the reference I think and not the value itself

https://duckduckgo.com/?t=ffab&q=Typescript+set+type&ia=web

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

https://duckduckgo.com/?q=typescript+set+of+objects&t=ffab&ia=web&iax=qa

https://stackoverflow.com/questions/39950597/typescript-set-of-objects#39953846

Looks like I need to define my own Set for that! Hmm

For now I think I'm going to defer it and just use the Set and write tests and implement things assuming the set works. Hmm, but yeah, I have to come back and ensure that the set works or else it's gonna have lot of problems

For example, I don't know how I can use the `has`, `add` and other methods if it cannot even find using value and instead find using reference and do the same for `add` too

https://duckduckgo.com/?t=ffab&q=javascript+override+%3D%3D%3D+&ia=web

https://duckduckgo.com/?q=javascript+override+equality&t=ffab&ia=web

https://duckduckgo.com/?t=ffab&q=javascript+set+of+objects&ia=web

https://medium.com/coding-at-dawn/how-to-use-set-to-filter-unique-items-in-javascript-es6-196c55ce924b

Anyways, I'm going to ignore if there are duplicates and see if I can work on an algorithm that can still work even if there are duplicates, or better, avoid duplicates in case there are any

Let's begin with the implementation! :)

As of now, for still lives, I don't really have to implement anything lol. I just have to send back whatever input I get and the unit tests will pass ;) :D test driven development :D :D

For the oscillators, I have thought of one implementation

Since I get only the list of alive cells, I can iterate through all alive cells and check if they are still alive in the next gen or not. If they are not, discard them. Next get all the unique dead cells surrounding the alive cells - how? Get all the surrounding neighbor cells for all the alive cells and check which ones are alive using the alive cells set and then get the dead cells and put it in a set. Now iterate through the dead cells and find if the dead cell will become alive or not. If it becomes alive, take it, or else discard it.

All this happens simultaneously according to the algorithm. So, we can see how to avoid losing the input data and having a separate output data where we put all the data and it can be as simultaneous as possible.

Why check only the dead cells surrounding the alive cells? What about the others? Well, a dead cell can only become alive if there are alive cells near it. If alive cells are near dead cells that can be possibly become alive, then for alive cells, the dead cells that can possibly become alive are near the same alive cells.

I think that logic will work out! :) This way I also don't have to think about a finite grid! ;) I can think of finite grids when I do UI or maybe still have infinite grids and not show the things outside of the grid shown on the screen - that's visible to the user

---

I was simply checking out the set collection libraries in npm

https://www.npmjs.com/search?q=typescript%20set

https://www.npmjs.com/search?q=typescript%20set%20collection

https://www.npmjs.com/package/ts-set-utils

https://www.npmjs.com/package/scl

https://samvv.github.io/scl.js/

https://samvv.github.io/scl.js/interfaces/set.html

https://www.npmjs.com/search?q=typescript%20collection

https://www.npmjs.com/package/type-fest

https://www.npmjs.com/search?q=typescript%20set%20datastructure

https://www.npmjs.com/package/@thi.ng/associative

---

I finished the still lives patterns

I was thinking about the simplest implementation needed for oscillator patterns. Or I might just implement it all

I think I might use the Set implementation from https://www.npmjs.com/package/@thi.ng/associative

---

I'm now implementing the Oscillators

I'm also thinking of just extending the native Set instead of using any library. Let's see! :) More like a `Cells` class which encapsulates a set of cells or extends a set of cells. If it's encapsulating, I might have to do more and introduce a new Set implementation however. Hmm

Not to mention, the output should still be a normal set and not be some custom set!

---

Now, with the first Oscillators pattern, we have Blinkers.

In this case, we just need to implement two rules - if an alive cell does not have 2 or 3 alive neighbor cells, it dies or else, put in other words, if it has less than 2 alive neighbor cells, it dies. And then other one is about dead cells becoming alive when they have exactly 3 alive neighbors

Actually the wikipedia condenses the rules into three simple rules -

- Alive cells remain alive if there are exactly 2 or 3 neighbors
- Dead cells become alive if there are exactly 3 neighbors
- Any other cells become dead if they are alive, or remain dead if they are dead

I could follow this implementation too :P This is way more easier to jot down and understand, though there are many ways to say the same thing

First, I could - iterate through the alive cells and filter down the cells which will still remain alive in the next generation

---

Finally I have implemented it all.

I had to make some changes to the way I stored the set of cells and include `has` and `add` methods. I will have to write tests for those 🙈

I also implemented in a very messy manner. I gotta see how I can make it better. But to start off, I want to add more tests with the other patterns to see if it all works fine

The code has the explanation of how it has been implemented. After iterating through alive cells and checking which ones will still remain alive, I iterated through the dead cells near the alive cells and checked which one would become alive :)

After adding more tests, instead of beautifying the engine, I want to build the UI to see this in effect! :D

---

I have also added a test for the Toad pattern

I'm wondering if I should give away the initial generation of all these patterns! :D Give away as part of the package that is!

Or I guess I'll just copy paste this stuff for now 🤷 Maybe later I can export constants if needed!

I'm planning to publish this as an npm package for now! :D

---

For packaging and publishing, I'm adding scripts to clean the dist directory and then build the package using TypeScript compiler and do this automatically whenever the publish command is executed

I'm also ignoring unnecessary files from the npm package by checking the package tar ball and then ignoring the unnecessary files using `.npmignore`

I was actually going to ignore package.json too, lol. I realized that's the only file that has information around the package metadata apart from the tar ball name containing package name and version. The package.json has information about the description, keywords and also the main thing - the entry point of the package under the `main`. So, fortunately, I didn't ignore it.

I'm going to test this whole thing locally actually

Some links I browsed through while checking this packaging stuff

https://duckduckgo.com/?t=ffab&q=npm+pack&ia=web

https://bugfender.com/blog/how-to-create-an-npm-package/

https://bugfender.com/blog/how-to-create-an-npm-package/
