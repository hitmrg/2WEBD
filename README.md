# 2WEBD

2WEBD Project : React Application display Met Museum Artworks

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## TUTORIAL TO EXPLAIN : HOW TO USE THE PLAYWRIGHT TESTS

Navigate to the directory where your source code is located using the terminal. You can use commands like cd (change directory) to move around :
- Open a Terminal in the Source Code Folder Location:

```console
Run npm init playwright@latest
npx playwright test
npx playwright show-report
```

# EXPLICATIONS 

 - Initialize Playwright:
Run npm init playwright@latest in the terminal. This command initializes Playwright in your project. Make sure you have npm installed and configured.

- Provide Default Values:
During the initialization process, npm will prompt you to provide some information such as package name, version, description, etc. You can either fill these out or simply press Enter to accept the default values.

- Run Playwright Tests:
After initialization, you can run your Playwright tests using npx playwright test command in the terminal. This command executes all the tests you've written using Playwright.

- Show Test Report:
To visualize the test report, execute npx playwright show-report in the terminal. This command will generate a report of your test results.

- Watch Report on Website:
After running the show-report command, a local server will start, and the report will be served on a local web page. You can open this page in your web browser to view the test results visually.

Made by Hugo Margonelli & Liam Meridja (FR Student)
