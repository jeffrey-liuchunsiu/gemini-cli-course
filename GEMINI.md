# FoodSmash - Gemini CLI Starter App

This document provides an overview of the "FoodSmash" project, a dummy Nuxt 3 application used for demonstrating and teaching the capabilities of the Gemini CLI. It outlines the project's purpose, technologies, and essential development commands.

## Project Overview

*   **Purpose:** FoodSmash is a web application where users can discover, share, rate, and review unique and interesting food combinations. It serves as a practical example for interacting with the Gemini CLI.
*   **Main Technologies:**
    *   **Framework:** Nuxt 3 (built on Vue.js 3)
    *   **Language:** TypeScript
    *   **Testing:** Vitest with `@nuxt/test-utils`
    *   **UI Components:** Lucide-Vue-Next for icons
    *   **Styling:** Custom CSS using CSS variables for theming.
*   **Architecture:** The application follows a standard Nuxt 3 project structure, including:
    *   `app.vue`: The main application entry point.
    *   `app/layouts/default.vue`: Defines the overall page layout (header, main content slot, footer).
    *   `app/pages/`: Contains Vue components for different routes (e.g., `index.vue` for the homepage, `create.vue` for creating new combos).
    *   `app/assets/css/main.css`: Global styles and CSS variables for theming.

## Building and Running

To get the FoodSmash application up and running locally, use the following commands:

*   **Install Dependencies:**
    ```bash
    npm install
    ```
*   **Run Development Server:** Starts the application in development mode, accessible at `http://localhost:3000`.
    ```bash
    npm run dev
    ```
*   **Build for Production:** Compiles the application for production deployment.
    ```bash
    npm run build
    ```
*   **Generate Static Site:** Generates a static version of the application.
    ```bash
    npm run generate
    ```
*   **Preview Production Build:** Serves the built application for a local preview.
    ```bash
    npm run preview
    ```
*   **Run Tests:** Executes all tests using Vitest.
    ```bash
    npm run test
    ```

## Development Conventions

*   **Code Structure:** Adheres to the standard Nuxt 3 directory and file conventions.
*   **Language:** TypeScript is used throughout the project for type safety.
*   **Styling:** Global styles and theming are managed through `app/assets/css/main.css`, utilizing CSS variables for consistent design.
*   **Iconography:** Icons are provided by the `lucide-vue-next` library.
*   **Testing:** Unit and component tests are written using Vitest and located in the `test/nuxt/` directory, following a `*.test.ts` naming convention.
