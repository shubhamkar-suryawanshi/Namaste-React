# Testing

## Jest, React testing library, Enzyme

### main reason of using test library
- At a time, many developers work on project, and app involved many components, and change in one component, it change other components too(search bar)- Interdependancy, that is the main reason
- Changes done by other developer can break my code and I will not even realize that he/she break my code
- Simply passing testcases ensumres the code is properly intact - If we adding new code, its not breaking existing code.

---
Test driven developement - we write code even before write a code - its not bad but not fisible as developement become very slow

- Types of testing
    1. E2E testing - Selenium, Syprus - Entire user journey - QA team - uses headless browser
    2. Unit testing - checking particular component
    3. Integration testing - testing integration of components
---
## Testing Library
- React Testing library - uses Jest
- Jest
### Steps
1. install both
`npm install --save-dev @testing-library/react` and `npm i -D jest`
2. configure jest `npx jest --init`
    - js
    - jsdom
    - yes to coverage report
    - babel provider
    - automatic garbage collection
3. npm run test - error - npm i -D jest-environment-jsdom
- now run it again
4. now create test folder - inside component folder "__test__"
5. naming convention - for sum.js - sum.test.js
```
test("Check the sum of two positive numbers", ()=>{})
```
then `npm run test`
- gives error(cz jest not understand import) called "connot use import statement outside module" So configue babel
`npm install --save-dev babel-jest @babel/core @babel/preset-env`
- uh can create "babel.config.js" or uh can use ".babelrc"
- IMP: ".babelrc" requires a json