# modern-graphql-starter

# Introduction

This is a starter project for a modern graphql federation. It is optimized for **1 minute CI/CD**, tests included,
find out how [here](docs/iteration.md). The design principles are:

- **Fast iteration**:
- **Low dependencies**:
- **High credence in tests**:

Read more about the project [here](docs/README.md).

**Tools used**:

- [Apollo router](https://www.apollographql.com/docs/router/): Blazing fast graphql router written in rust
- [Apollo rover](https://www.apollographql.com/docs/rover/): Schema manager and validator written in rust
- [Esbuild](https://esbuild.github.io/): Blazing fast typescript compiler written in golang
- [Rome toolchain](https://rome.tools/): Blazing fast linter and formatter written in golang
- [Ecmascript modules](https://nodejs.org/api/esm.html): Ecmascript modules for easy testing


# Table of Contents
1. [Prerquisites](#Prerequisites)
2. [Installation](#Installation)
3. [Running the app](#Running-the-app)
4. [Testing](#Testing)

# Prerequisites

This project has been tried on linux. It should work on other platforms, but it has not been tested.

- Setup yarn v4, as explained [here](https://yarnpkg.com/getting-started/install):
```bash
nvm use
corepack enable
corepack prepare yarn@canary --activate
```

Also copy the `.env.example` file to `.env` and fill in the values.
```bash
cp infra/.env.example infra/.env
```

You need a modern docker version to run this, check more [here](https://docs.docker.com/get-docker/).

# Installation

```bash
yarn install
```

# Running the app

```bash
yarn dev:watch
```

Then visit:

- http://localhost:4000/graphql: Federation router
- http://localhost:4001/graphql: `ocm-service` graphql instance
- https://localhost:8443/: `etl-service` worker

# Testing

- unit
- e2e
- coverage


# TODOS

- [ ] when dist folders doesn't exist `build` service fails due to permissions
