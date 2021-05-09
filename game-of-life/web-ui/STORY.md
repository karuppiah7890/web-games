# Game of Life Web UI

I wanted to build the UI using React and figured I'll go ahead and use Create React App for it

https://create-react-app.dev/

I went ahead and ran this

```bash
$ npx create-react-app web-ui
Need to install the following packages:
  create-react-app
Ok to proceed? (y) y

Creating a new React app in /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/web-ui.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

yarn add v1.17.3
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.22.5", while you're on "1.17.3".
info To upgrade, run the following command:
$ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
success Saved 7 new dependencies.
info Direct dependencies
├─ cra-template@1.1.2
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
└─ react@17.0.2
info All dependencies
├─ cra-template@1.1.2
├─ immer@8.0.1
├─ react-dev-utils@11.0.4
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
├─ react@17.0.2
└─ scheduler@0.20.2
✨  Done in 31.59s.

Installing template dependencies using yarnpkg...
yarn add v1.17.3
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 17 new dependencies.
info Direct dependencies
├─ @testing-library/jest-dom@5.12.0
├─ @testing-library/react@11.2.6
├─ @testing-library/user-event@12.8.3
├─ react-dom@17.0.2
├─ react@17.0.2
└─ web-vitals@1.1.2
info All dependencies
├─ @testing-library/dom@7.30.4
├─ @testing-library/jest-dom@5.12.0
├─ @testing-library/react@11.2.6
├─ @testing-library/user-event@12.8.3
├─ @types/aria-query@4.2.1
├─ @types/jest@26.0.23
├─ @types/testing-library__jest-dom@5.9.5
├─ css.escape@1.5.1
├─ css@3.0.0
├─ dom-accessibility-api@0.5.4
├─ lz-string@1.4.4
├─ min-indent@1.0.1
├─ react-dom@17.0.2
├─ react@17.0.2
├─ redent@3.0.0
├─ strip-indent@3.0.0
└─ web-vitals@1.1.2
✨  Done in 7.57s.
Removing template package using yarnpkg...

yarn remove v1.17.3
[1/2] 🗑  Removing module cra-template...
[2/2] 🔨  Regenerating lockfile and installing missing dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
success Uninstalled packages.
✨  Done in 9.04s.

Success! Created web-ui at /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/web-ui
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd web-ui
  yarn start

Happy hacking!
```

I need to install yarn first though

https://yarnpkg.com/

https://yarnpkg.com/getting-started/install

```bash
$ npm install -g yarn
```

```bash
$ yarn --version
1.22.10
```

---

I was checking out the various UIs for the Game of Life and found some interesting ones here

https://playgameoflife.com/

https://playgameoflife.com/lexicon/beacon_maker

https://playgameoflife.com/lexicon/101

https://playgameoflife.com/lexicon/119P4H1V0

https://playgameoflife.com/info

https://curlie.org/Computers/Artificial_Life/Cellular_Automata/Conway%27s_Game_of_Life

---

Unfortunately the React app I created was not created using TypeScript

https://create-react-app.dev/docs/getting-started#selecting-a-template

https://www.npmjs.com/search?q=cra-template-*

I need to use a TypeScript template and also use npm package manager. I don't think I need yarn for now. Or...maybe I'll go with yarn, hmm. I think it has the yarn resolution feature, but other than that I don't see much difference. Hmm. Looks like npm does not have the feature natively but some packages help with it. Hmm

Okay, I'll go with npm for now just to maintain consistency and also because I don't see myself having any resolution related issues in the future. Or, okay, I'll choose yarn. Just in case. Lol. Such a dilemma

```bash
$ npx create-react-app web-ui --template typescript

Creating a new React app in /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/web-ui.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...

yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 7 new dependencies.
info Direct dependencies
├─ cra-template-typescript@1.1.2
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
└─ react@17.0.2
info All dependencies
├─ cra-template-typescript@1.1.2
├─ immer@8.0.1
├─ react-dev-utils@11.0.4
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
├─ react@17.0.2
└─ scheduler@0.20.2
✨  Done in 29.26s.

Installing template dependencies using yarnpkg...
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 24 new dependencies.
info Direct dependencies
├─ @testing-library/jest-dom@5.12.0
├─ @testing-library/react@11.2.6
├─ @testing-library/user-event@12.8.3
├─ @types/jest@26.0.23
├─ @types/node@12.20.12
├─ @types/react-dom@17.0.3
├─ @types/react@17.0.5
├─ react-dom@17.0.2
├─ react@17.0.2
├─ typescript@4.2.4
└─ web-vitals@1.1.2
info All dependencies
├─ @testing-library/dom@7.30.4
├─ @testing-library/jest-dom@5.12.0
├─ @testing-library/react@11.2.6
├─ @testing-library/user-event@12.8.3
├─ @types/aria-query@4.2.1
├─ @types/jest@26.0.23
├─ @types/node@12.20.12
├─ @types/prop-types@15.7.3
├─ @types/react-dom@17.0.3
├─ @types/react@17.0.5
├─ @types/scheduler@0.16.1
├─ @types/testing-library__jest-dom@5.9.5
├─ css.escape@1.5.1
├─ css@3.0.0
├─ csstype@3.0.8
├─ dom-accessibility-api@0.5.4
├─ lz-string@1.4.4
├─ min-indent@1.0.1
├─ react-dom@17.0.2
├─ react@17.0.2
├─ redent@3.0.0
├─ strip-indent@3.0.0
├─ typescript@4.2.4
└─ web-vitals@1.1.2
✨  Done in 11.89s.

We detected TypeScript in your project (src/App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.

Removing template package using yarnpkg...

yarn remove v1.22.10
[1/2] 🗑  Removing module cra-template-typescript...
[2/2] 🔨  Regenerating lockfile and installing missing dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
success Uninstalled packages.
✨  Done in 13.33s.

Success! Created web-ui at /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/web-ui
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd web-ui
  yarn start

Happy hacking!
```

Apparently I could have easily added TypeScript to the existing Js based CRA app project just by installing TypeScript package and some types. I had to add tsconfig.json too

---

As part of this project, I wanted to try out React Cosmos project! :D

https://duckduckgo.com/?t=ffab&q=react+cosmos&ia=web

https://reactcosmos.org/

https://github.com/react-cosmos/react-cosmos

https://github.com/react-cosmos/react-cosmos/blob/main/docs/README.md#table-of-contents

```bash
$ yarn add --dev react-cosmos
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
warning react-cosmos > socket.io > debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning "react-cosmos > webpack-dev-middleware@4.1.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 46 new dependencies.
info Direct dependencies
└─ react-cosmos@5.6.2
info All dependencies
├─ @base2/pretty-print-object@1.0.0
├─ @skidding/launch-editor@2.2.3
├─ @skidding/webpack-hot-middleware@2.25.0
├─ @types/http-proxy@1.17.5
├─ after@0.8.2
├─ arraybuffer.slice@0.0.7
├─ backo2@1.0.2
├─ base64id@1.0.0
├─ blob@0.0.5
├─ callsite@1.0.0
├─ charenc@0.0.2
├─ component-bind@1.0.0
├─ component-inherit@0.0.3
├─ core-js@3.12.1
├─ crypt@0.0.2
├─ engine.io-client@3.3.2
├─ engine.io-parser@2.1.3
├─ engine.io@3.3.2
├─ es6-promisify@6.1.1
├─ for-each@0.3.3
├─ fs-monkey@1.0.3
├─ http-proxy-middleware@1.3.1
├─ import-from@3.0.0
├─ is-plain-obj@3.0.0
├─ map-age-cleaner@0.1.3
├─ md5@2.3.0
├─ mem@8.1.1
├─ memfs@3.2.2
├─ mimic-fn@3.1.0
├─ object-component@0.0.3
├─ os-tmpdir@1.0.2
├─ p-defer@1.0.0
├─ pem@1.14.4
├─ query-string@5.1.1
├─ react-cosmos-playground2@5.6.1
├─ react-cosmos-plugin@5.6.0
├─ react-cosmos-shared2@5.6.1
├─ react-cosmos@5.6.2
├─ react-element-to-jsx-string@14.3.2
├─ socket.io-adapter@1.1.2
├─ socket.io@2.2.0
├─ to-array@0.1.4
├─ util.promisify@1.1.1
├─ webpack-dev-middleware@4.1.0
├─ xmlhttprequest-ssl@1.5.5
└─ yeast@0.1.2
✨  Done in 18.69s.
```

I also added the `cosmos` scripts in package.json

```bash
$ yarn cosmos
yarn run v1.22.10
$ cosmos
[Cosmos] Using default cosmos config
[Cosmos] See you at http://localhost:5000
[Cosmos] Using default webpack config
[Cosmos] Building webpack...
webpack built 57080d0e935d8854033e in 1423ms
   282 modules
[Cosmos] webpack build invalidated by STORY.md
webpack building...
webpack built 7136a0b2db0e0eb3a7d4 in 199ms
   282 modules
```

http://localhost:5000/

Weird that it builds for changes in markdown files like STORY.md , but anyways

---

I tried to create a `Cell` component and `Cell` fixture and got this error

```bash
ERROR in ./src/Cell.fixture.tsx 3:15
Module parse failed: Unexpected token (3:15)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| import Cell from "./Cell";
| 
> export default <Cell />
```

Looks like I need to use a proper web pack config

https://github.com/react-cosmos/react-cosmos/blob/main/docs/README.md#compilation

https://github.com/react-cosmos/react-cosmos/blob/main/docs/README.md#webpack

https://github.com/react-cosmos/react-cosmos/blob/main/docs/README.md#create-react-app

I added a cosmos config file - `cosmos.config.json`

```json
{
    "staticPath": "public",
    "watchDirs": [
        "src"
    ],
    "webpack": {
        "configPath": "react-scripts/config/webpack.config"
    }
}
```

I tried to run cosmos again but the cosmos web UI didn't show up, hmm

```bash
$ yarn cosmos
yarn run v1.22.10
$ cosmos
[Cosmos] Using cosmos config found at cosmos.config.json
[Cosmos] Serving static files from public
[Cosmos] See you at http://localhost:5000
[Cosmos] Using webpack config found at node_modules/react-scripts/config/webpack.config.js
[Cosmos] Building webpack...
(node:13089) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at /Users/karuppiahn/oss/github.com/karuppiah7890/web-games/game-of-life/web-ui/node_modules/postcss-safe-parser/node_modules/postcss/package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
=============

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.2.0

YOUR TYPESCRIPT VERSION: 4.2.4

Please only submit bug reports when using the officially supported version.

=============
webpack built add60ae3f119f49f5afa in 6422ms
Hash: add60ae3f119f49f5afa
Version: webpack 4.44.2
Time: 6422ms
Built at: 05/09/2021 6:20:29 PM
              Asset        Size        Chunks                   Chunk Names
     _renderer.html    1.73 KiB                [emitted]        
asset-manifest.json   394 bytes                [emitted]        
            main.js    11.2 KiB          main  [emitted]        main
        main.js.map  1000 bytes          main  [emitted] [dev]  main
    runtime-main.js      35 KiB  runtime-main  [emitted]        runtime-main
runtime-main.js.map    36.4 KiB  runtime-main  [emitted] [dev]  runtime-main
    vendors~main.js    2.67 MiB  vendors~main  [emitted]        vendors~main
vendors~main.js.map     2.9 MiB  vendors~main  [emitted] [dev]  vendors~main
Entrypoint main = runtime-main.js runtime-main.js.map vendors~main.js vendors~main.js.map main.js main.js.map
[0] multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-cosmos/dist/plugins/webpack/client/reactDevtoolsHook.js ./node_modules/@skidding/webpack-hot-middleware/client.js?reload=true&overlay=false ./node_modules/react-dev-utils/webpackHotDevClient.js ./node_modules/react-cosmos/dist/plugins/webpack/client/index.js 76 bytes {main} [built]
[./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js] 493 bytes {vendors~main} [built]
[./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/safeThis.js] 512 bytes {vendors~main} [built]
[./node_modules/@skidding/webpack-hot-middleware/client-overlay.js] 2.14 KiB {vendors~main} [built]
[./node_modules/@skidding/webpack-hot-middleware/client.js?reload=true&overlay=false] 7.51 KiB {vendors~main} [built]
[./node_modules/@skidding/webpack-hot-middleware/node_modules/strip-ansi/index.js] 162 bytes {vendors~main} [built]
[./node_modules/@skidding/webpack-hot-middleware/process-update.js] 4.29 KiB {vendors~main} [built]
[./node_modules/core-js/modules/esnext.promise.try.js] 571 bytes {vendors~main} [built]
[./node_modules/querystring-es3/index.js] 126 bytes {vendors~main} [built]
[./node_modules/react-cosmos/dist/dom/index.js] 1.3 KiB {vendors~main} [built]
[./node_modules/react-cosmos/dist/plugins/webpack/client/errorOverlay/index.js] 292 bytes {vendors~main} [built]
[./node_modules/react-cosmos/dist/plugins/webpack/client/hmrErrorHandler.js] 317 bytes {vendors~main} [built]
[./node_modules/react-cosmos/dist/plugins/webpack/client/index.js] 914 bytes {vendors~main} [built]
[./node_modules/react-cosmos/dist/plugins/webpack/client/reactDevtoolsHook.js] 884 bytes {vendors~main} [built]
[./node_modules/react-dev-utils/webpackHotDevClient.js] 7.96 KiB {vendors~main} [built]
    + 215 hidden modules
Child HtmlWebpackCompiler:
                          Asset   Size               Chunks  Chunk Names
    __child-HtmlWebpackPlugin_0  6 KiB  HtmlWebpackPlugin_0  HtmlWebpackPlugin_0
    Entrypoint HtmlWebpackPlugin_0 = __child-HtmlWebpackPlugin_0
    [./node_modules/html-webpack-plugin/lib/loader.js!./public/index.html] 2 KiB {HtmlWebpackPlugin_0} [built]

^C
```

The cosmos web UI gave some already listening error

Looks like it's a known issue

https://github.com/react-cosmos/react-cosmos/blob/main/docs/README.md#troubleshooting

https://github.com/react-cosmos/react-cosmos/issues/1272

```bash
yarn add --dev cross-env
```

```json
{
  "scripts": {
    "cosmos": "cross-env FAST_REFRESH=false cosmos"
  }
}
```

I can see the `Cell` component fixture now! :)
