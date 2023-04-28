# Introduction

hello

# Design philosophy

# Architecture

```mermaid
flowchart LR
    subgraph VPC
        id1 --- id2
        id2 --- id3
        id2 --- id4
        id1 --- id5
        id5 --- id6
        id5 --- id7
    end

    id0 --- id1

    id0(Client)
    id1[Apollo Router]
    id2[graphql-service-1]
    id3[worker]
    id4[datastore]
    id5[graphql-service-2]
    id6[worker]
    id7[datastore]
```

# Tools used

- [Apollo router](https://www.apollographql.com/docs/router/): Blazing fast graphql router written in rust
- [Apollo rover](https://www.apollographql.com/docs/rover/): Schema manager and validator written in rust
- [Esbuild](https://esbuild.github.io/): Blazing fast typescript compiler written in golang
- [Rome toolchain](https://rome.tools/): Blazing fast linter and formatter written in golang
- [Ecmascript modules](https://nodejs.org/api/esm.html): Ecmascript modules for easy testing
