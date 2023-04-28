# modern-graphql-starter

# Introduction

This is a starter project for a modern graphql server. It is optimized for **1 minute CI/CD**, tests included,
find out how here.

**Tools used**:
- [Apollo router]

# Table of Contents
1. [Prerquisites](#example)
2. [Installation](#example2)
3. [Running the app](#third-example)
4. [Testing](#fourth-examplehttpwwwfourthexamplecom)

# Prerequisites

This project has been tested on linux. It should work on other platforms, but it has not been tested.

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

# Installation

```bash
yarn install
```

# Running the app

```bash
yarn dev:watch
```

Then visit:

- http://localhost:4000/graphql
- https://localhost:8443/

# Testing

- unit
- e2e
- coverage


# TODOS

- [ ] when dist folders doesn't exist `build` service fails due to permissions
