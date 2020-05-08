# Nextjs w/typescript and CI/CD

1. a structure for a frontend application utilizing nextjs
2. Typescript support
3. CI/CD with gitlab

## Prequisites

All of these were noted from my machine at the time and may not be the lower limits of dependencies' versions

- Node >= 12 (with npm and npx)
- Yarn
- ESLint. Install dbaeumer.vscode-eslint AND esbenp.prettier-vscode extensions to vscode

## Quick Start

- Find all instances of `replace-me` and replace them with a sensible name for your project
- Obtain credentials for `./env/.db.env`, `./env/.firebase_web.env` and `./server/google_service_accounts/firebase_service_account.json` files. They are required to run the project.
- Run `yarn` to install dependencies
- Run `yarn dev` to start the app

## Linting

- Uses the .eslintrc.js file at the root of the project to configure different rules for the project.
- Install dbaeumer.vscode-eslint AND esbenp.prettier-vscode extensions to vscode

## Logger

- Need to implement

## Testing

- See [Jokes](#jokes) section

## Notes

## Directory Structure

- `components`: directory for all sub components for the app.
- `pages`: Components to render based on a route. These components often contain components from the `components` directory
- `posts`: content for the application.
- `public`: Public/static files required by the application. Things like images go here.
- `styles`: Stylesheets using css and styled-js for different pages in the app

## Adding a new page to the app

- Each directory and file in the `pages` directory represents a page in the application.

## NextJS

- Getting started documentation for Nextjs is excellent [Getting Started](https://nextjs.org/docs/getting-started)

## [CI/CD](https://docs.google.com/document/d/1oufUMsz1exq8iEC98emocDtwcjimS4RXz3Ors2wqPPc/edit?usp=sharing)

## Jokes

- What did Neil Armstrong say when no one laughed at his moon jokes?  
  “I guess you had to be there.”
- Testing in this project is a joke
