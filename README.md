# modern-graphql-starter

# Introduction

This is a starter project for a modern graphql federation. It is optimized for **1 minute CI/CD**, tests included,
find out how [here](docs/pipelines.md). The main principles are:

- **Fast iteration**: Several sources [[1](https://www.oreilly.com/library/view/accelerate/9781457191435/)] 
[[2](https://circleci.com/resources/2023-state-of-software-delivery/)] [[3](https://cloud.google.com/devops/state-of-devops/)]
tell us that iteration speed is the main predictor of developer productivity. This project tries to achieve 1 minute 
from push to deployment.
- **Light dependencies**: Each package installed brings benefits, but also costs. This project tries to keep the 
dependencies to a minimum.
- **Testing trophy**: A passing test suite should give the engineer a high credence that the code is production ready. 
This project try to achieve that by inverting the classical testing pyramid, preferring a 
[testing trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) instead.

Read more about the project design [here](docs/README.md).


# Table of Contents
1. [Prerequisites](#Prerequisites)
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

Make sure your schema is updated with:

```bash
yarn graphql:generate
```

Apollo router will automatically pick the changes thanks to hot module reloading.

# Testing

- unit
- e2e
- coverage


# TODOS

- [ ] when dist folders doesn't exist `build` service fails due to permissions
- [ ] Cleanup docker
- [ ] Cleanup router
- [ ] Split docker compose file
