- JS engine gives us superpower(web apis) to manupulate DOM
- Similarly, how we get superpower of React?\
  => React library will gives us that superpowers and there are several ways to put that powers in code
  1. CDN links
     the problem with these CDN links is, they are static as version is mentioned in the links and while using CDN, we are fetching data from other CDN/website/server. So it will be slow. If we have it on dev/local server, it will run fast
- to make the code production ready(fast and optimised), we need to minify code, bundle the code, we need server to run the things, remove console logs, code optimization, caching and lot more...
  For that, we use bundlers
- Bundlers convert many js files into 1 main js file
- bundlers eg. webpacks, parcel, vite
- we will use parcel
- what is bundler basically? It is a package
---
---

# Package Manager

`https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management`

## A dependency in your project

- Dependancy means all the packages that our project needs

- A dependency is a third-party bit of software that was probably written by someone else and ideally solves a single problem for you. A web project can have any number of dependencies, ranging from none to many, and your dependencies might include sub-dependencies that you didn't explicitly install — your dependencies may have their own dependencies.

- A simple example of a useful dependency that your project might need is some code to calculate relative dates as human-readable text. You could certainly code this yourself, but there's a strong chance that someone else has already solved this problem — why waste time reinventing the wheel? Moreover, a reliable third-party dependency will likely have been tested in a lot of different situations, making it more robust and cross-browser compatible than your own solution.

- A project dependency can be an entire JavaScript library or framework — such as React or Vue — or a very small utility like our human-readable date library, or it can be a command line tool such as Prettier or ESLint.

- Without modern build tools, dependencies like this might be included in your project using a simple `<script>` element, but this might not work right out of the box and you will likely need some modern tooling to bundle your code and dependencies together when they are released on the web. A bundle is the term that's generally used to refer to a single file on your web server that contains all the JavaScript for your software — typically compressed as much as possible to help reduce the time it takes to get your software downloaded and displayed in your visitors' browser.

- In addition, what happens if you find a better tool that you want to use instead of the current one, or a new version of your dependency is released that you want to update to? This is not too painful for a couple of dependencies, but in larger projects with many dependencies this kind of thing can become really challenging to keep track of. It makes more sense to use a package manager such as npm, as this will guarantee that the code is added and removed cleanly, as well as a host of other advantages.

## What exactly is a package manager?

- We've met npm already, but stepping back from npm itself, a package manager is a system that will manage your project dependencies.

- The package manager will provide a method to install new dependencies (also referred to as "packages"), manage where packages are stored on your file system, and offer capabilities for you to publish your own packages.

- In theory you may not need a package manager and you could manually download and store your project dependencies, but a package manager will seamlessly handle installing and uninstalling packages. If you didn't use one, you'd have to manually handle:
  - Finding all the correct package JavaScript files.
  - Checking them to make sure they don't have any known vulnerabilities.
  - Downloading them and putting them in the correct locations in your project.
  - Writing the code to include the package(s) in your application (this tends to be done using JavaScript modules, another subject that is worth reading up on and understanding).
  - Doing the same thing for all of the packages' sub-dependencies, of which there could be tens, or hundreds.
  - Removing all the files again if you want to remove the packages.

- In addition, package managers handle duplicate dependencies (something that becomes important and common in front-end development).

- In the case of npm (and JavaScript- and Node-based package managers) you have two options for where you install your dependencies. As we touched on in the previous article, dependencies can be installed globally or locally to your project. Although there tend to be more pros for installing globally, the pros for installing locally are more important — such as code portability and version locking.

- For example, if your project relied on Webpack with a certain configuration, you'd want to ensure that if you installed that project on another machine or returned to it much later on, the configuration would still work. If a different version of Webpack was installed, it may not be compatible. To mitigate this, dependencies are installed locally to a project.

- To see local dependencies really shine, all you need to do is try to download and run an existing project — if it works and all the dependencies work right out of the box, then you have local dependencies to thank for the fact that the code is portable.

## Package registries

- For a package manager to work, it needs to know where to install packages from, and this comes in the form of a package registry. The registry is a central place that a package is published to and thus can be installed from. npm, as well as being a package manager, is also the name of the most commonly-used package registry for JavaScript packages. The npm registry exists at npmjs.com.

- npm is not the only option. You could manage your own package registry — products like Microsoft Azure allow you to create proxies to the npm registry (so you can override or lock certain packages), GitHub also offers a package registry service, and there will be likely more options appearing as time goes on.

- What is important is that you ensure you've chosen the best registry for you. Many projects will use npm, and we'll stick to this in our examples throughout the rest of the module.

## NPM

- for that we first need to install package manager
```
npm init -y
```
  (-y is to skip lots of options)[Once you did this, uh will get package.json...the info uh see there will be filled by yourself if you do 'npm init' only]
- What npm is for?
  - npm is the package manager for the Node JavaScript platform. Most commonly, it is used to publish, discover, install, and develop node programs.
  - Simply it manages all the packages we have with us. and we need it cz we can't build the website, only by injecting React in our code.
  - React app is powered by a lot of things/packages eg to minify, to optimize, to remove console logs...for that we need helper packages and these helper packages comes with npm
- Now to ignite/start our app, we need
  parcel

## Parcel

- install parcel with following command
  ```
  npm install -D parcel
  ```
- the 'D'(--save-dev also used in place of -D) here represents it's DevDependancy means, we want the parcel only in our machine, not on server (cz parcel will automatically convert all js, css, html files into 1 file each and browser will understand the code)
- We need parcel in our developement envirnoment
- after running this, package.json modified(devDependancy added there), also package-lock.json and node modules get added
- in devDependancy, packages version's
  - ^(Caret) means only modify minor versions automatically
  - ~(Tilda) means only modify major versions automatically
- Dependancies - we requeired them in a global envirnment (install it without using -D)

---
---
# JavaScript Bundlers or JavaScript Module Bundlers

- Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

What is a JavaScript module bundler?

- A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. A fantastic feature of a bundler is that it generates a dependency graph as it traverses your first code files. This implies that beginning with the entry point you specified, the module bundler keeps track of both your source files’ dependencies and third-party dependencies. This dependency graph guarantees that all source and associated code files are kept up to date and error-free.

How does a bundler work?

-  let's look at how these dependency management tools work. Overall, a bundler's operation is divided into two stages: dependency graph generation and eventual bundling.

- The first thing a module bundler does is generate a relationship map of all the served files. This process is called Dependency Resolution. To do this, the bundler requires an entry file which should ideally be your main file. It then parses through this entry file to understand its dependencies.

- Following that, it traverses the dependencies to determine the dependencies of these dependencies. Tricky, eh? It assigns unique IDs to each file it sees throughout this process. Finally, it extracts all dependencies and generates a dependency graph that depicts the relationship between all files.

- Why is this process necessary?

  - It enables the module to construct a dependency order, vital for retrieving functions when a browser requests them.\
  ` return {  id,  filename,  dependencies,  code,  };  `
  - It prevents naming conflicts since the JS bundler has a good source map of all the files and their dependencies.
  - It detects unused files allowing us to get rid of unnecessary files.

- Bundling

After receiving inputs and traversing its dependencies during the Dependency Resolution phase, a bundler delivers static assets that the browser can successfully process. This output stage is called Packing. During this process, the bundler will leverage the dependency graph to integrate our multiple code files, inject the required function and module.exports object, and return a single executable bundle that the browser can load successfully.
- `https://snipcart.com/blog/javascript-module-bundler`
- `https://dev.to/underscorecode/javascript-bundlers-an-in-depth-comparative-is-webpack-still-the-best-bundler-in-2021-59jk`

---

## What is npx?

- NPM is a package manager, you can install node.js packages using NPM

- NPX is a tool to execute node.js packages.

- It doesn't matter whether you installed that package globally or locally. NPX will temporarily install it and run it. NPM also can run packages if you configure a package.json file and include it in the script section.

## What is `.parcel-cache`?

- The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. 
- Committing it to git would be a bad idea - it would add a large number of (unnecessary) changes to your commit history, and it could easily get out-of-sync with the code that generated it.

## What is difference between `dependencies` vs `devDependencies`?

The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

## What is Tree Shaking?

- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
- In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

## What is HMR - Hot Module Replacement?

- Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
  - Retain application state which is lost during a full reload.
  - Save valuable development time by only updating what's changed.
  - Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

## What is '.gitignore'?
- A file which Git has been explicitly told to ignore.
- What to add in it - `https://www.toptal.com/developers/gitignore`

## Package.json vs package-lock.json

- The package.json file is the core of any node project. It stores critical metadata about a project that is necessary before releasing IT to npm, and it also specifies the functional properties of a project that npm utilizes. (VS) The package-lock.json is a lockfile that holds information on the dependencies or packages installed for a node.js project, including their exact version numbers.

- Purpose - The package for your project. json is the primary format for configuring and describing how to communicate with and execute your application. The npm CLI utilizes it to distinguish your project and comprehend how to handle its dependencies. (VS) Its objective is to offer an immutable version of package.json, so you may fetch an earlier version of your code and end up with the same node_modules folder.
- package-lock.json is created for locking the dependency with the installed version

## Dist folder

- node_modules: The dependency files of Parcel and date-fns.

- dist: The distribution directory — these are the automatically packaged, minified files Parcel has built for us, and the files it is serving at localhost:1234. These are the files you would upload to your web server when releasing the site online for public consumption.
## It's working on my local, idk y not in production

- package-lock locks the version and keep it safe, if not then in devDependancies the version will different and in production, version will different.
- package-lock tells the exact version available on my system
- never put it into git ignore
- integrity - maintain/check exact same version on local and server

## Node modules

- It is like a database for npm
- they are just packages to do work like minify, optimization ... all helper functions
- we should not add node_modules to git cz our package-lock.json have sufficient info to recreate node_modules
- package-lock.json maintaining the version of each and everything in the node module

## Install react

 ```
 npm install react
 ```
  (no -D cz I want react not only on dev/local envirnoment, but on global)
```
npm install react-dom
```
Then import the dependancies
```
import react and react-dom
```
- also tell browser that 
```
script.js is not normal js file, its module js file.
```

- It's cz we cannot import-export scripts, Module can import-export

## Ignite app

```
npx parcel index.html
```
 => developement build
  - npx means execute using npm
  - entry point is index.html
  - It create the dist folder and inside it, there are 3 main files html, css and js...simply parcel bundles everything and create these 3 production ready files
- then 
## Production build

```
npx parcel build index.html
```

## NOTE: 
1. NEVER touch node modules and package-lock.json
2. parcel.cache should be inside git-ignore as its possible to recreate

## Parcel is Beast

- Create a sever
- HMR - Hot Module Replacement - same functionality as live server
- File watcher algorithm (watch all files and update once saved)
- Bundling
- Minification
- code cleanup
- Tree shaking - removing unwanted code
- dev and production build
- superfast build algorithm
- Image Optimization (Images/videos...media are the most hevyest things for web)
- Caching while developement
- Compatable with older version of browser - polyfill
- https on dev/local enviornment (`npx parcel build index.html --https`)
- It uses consistant hashing algo
- Zero config - all above things are done by automatically, don't need to config everything manually

## Transitive Dependancies -

- When we have to build production ready app, we have to take many things into consideration like bundling, caching, unification, img optimization, and many more...we cant do all things alone as so many dependencies on it and those dependencies also depends on another dependancies, called Transitive Dependancies

- React takes help/dependency of parcel and parcel takes help/dependent of other helper packages to run the app

## browserlist

`https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z`

## Read Parcel documentation
