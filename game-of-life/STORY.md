# Game of Life

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
