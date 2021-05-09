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
