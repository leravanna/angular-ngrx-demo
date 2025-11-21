# StateNgDemo — NgRx Starter Project

## This project is a **simple demonstration of NgRx Store** in a modern Angular application.

## 📌 What This Demo Shows

### **1. Basic NgRx Setup**

The project includes a small **Counter** feature to show how NgRx works using:

- Actions
- Reducer
- Selectors
- Store
- Dispatching actions from the component
- Reading state with the `async` pipe

This is the minimal structure you will use in real features.

---

### **2. State Consistency in Action**

The Counter demonstrates how NgRx keeps state **centralized and consistent**:

- Clicking **+1**, **-1**, or **Reset** updates the value in the Store.
- Any component that selects the counter value will show the **same value**.
- If you navigate to another page (e.g., Counter Details) and return:
  - the number stays the same,
  - because the state lives in the **Store**, not in the component.

> **NgRx ensures predictable, shared state across the entire application.**

---

### **3. How This Helps Your Homework**

This example shows:

- Where to place actions, reducer, selectors, and effects
- How to register a feature in `app.config.ts`
- How to dispatch actions
- How to read state from the Store

You will follow the same structure when you implement NgRx for your **Items List** feature.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
