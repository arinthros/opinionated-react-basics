# Opinionated React Basics

A guide to best common practices, style preferences, and patterns used by the YouVersion team.

> This is not intended to be a beginner's guide to React, but a guide to the opinionated way that we write react.
> See [EpicReact.dev](https://epicreact.dev) for our preferred course on all things React.

For this example we will be using `@arinthros/common` which is my public package that is very similar to the private `@youversion/eslint-config`.

## Project Setup

Copy the `.vscode` folder from `node_modules/@arinthros/common` to the project root. This will auto-fix any lint or prettier issues when saving.

### Eslint/Prettier

Extend or import from our shared config packages. We accept merge requests! If you have trouble with a rule, make the edits, and bring it up with the web team for discussion and publishing to the shared package.

> See [@arinthros/common] for more details


### Branch naming

Format: `{initials}/{JIRA-ID}_{descriptive-name}`

Example: `git checkout -b bdh/YV-123_fix-plans-page-render-bug`

## AHA Paradigm

We subscribe to the Avoid Hasty Abstractions (AHA) paradigm, rather than DRY or WET. Only make an abstraction when it makes sense.
> See [AHA Programming](https://kentcdodds.com/blog/aha-programming)

## Code Style guide

Most of our styles are enforced through linting rules, but there are some which are not. We created style guides for the most common patterns.

- [JavaScript Style Guide](https://docs.thewardro.be/bcps/docs/web/JavaScript_Style_Guide.html)
- [React Style Guide](https://docs.thewardro.be/bcps/docs/web/React_Style_Guide.html)