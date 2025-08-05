# Any API Frontend

This project is a React application built with Create React App and TypeScript. It serves as the user interface for the Any API backend.

## Getting Started

To get the frontend running locally, follow these steps:

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    This command installs all the necessary packages defined in `package.json`. It is the standard way to manage dependencies for this project.
    ```bash
    npm install
    ```

3.  **Start the development server:**
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.
    ```bash
    npm start
    ```

## Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm test`: Launches the test runner in interactive watch mode.
-   `npm run build`: Builds the app for production to the `build` folder.
-   `npm eject`: **Note:** this is a one-way operation. Once you `eject`, you can’t go back! It removes the single build dependency from your project and copies all the configuration files and transitive dependencies into your project.

## Dependency Management

This project uses `npm` for package management. It's crucial to keep `package.json` and `package-lock.json` in sync to ensure consistent and reliable builds, especially in CI/CD environments like Cloudflare Pages.

### Upgrading or Downgrading a Package

When you need to change a package's version (e.g., downgrading TypeScript to fix a compatibility issue), you cannot just change the version in `package.json`. This will cause automated builds to fail because the `package-lock.json` file will be out of sync.

Follow these steps to correctly change a dependency version:

1.  **Modify `package.json`:**
    Change the version number of the desired package in the `dependencies` or `devDependencies` section of your `package.json` file.

2.  **Delete the old lock file:**
    Remove the `package-lock.json` file. This forces `npm` to resolve all dependencies from scratch based on the updated `package.json`.
    ```bash
    rm package-lock.json
    ```

3.  **Re-install dependencies:**
    Run `npm install`. This will create a new `package-lock.json` file that is perfectly in sync with the versions specified in `package.json`.
    ```bash
    npm install
    ```

4.  **Commit both files:**
    Commit both the updated `package.json` and the newly generated `package-lock.json` to your repository. This is essential for your deployments to succeed.
