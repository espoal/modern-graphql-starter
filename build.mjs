import { buildHelper } from '@libs/build'

buildHelper({
    name: 'etl-service',
    entryPoints: ['svcs/etl-service/src/index.ts'],
    outDir: 'etl-service/src',
    external: ['mongodb'],
})

buildHelper({
    name: 'ocm-service',
    entryPoints: ['svcs/ocm-service/src/index.ts'],
    outDir: 'ocm-service/src',
    external: ['@apollo/server', '@apollo/subgraph', 'graphql', 'graphql-tag'],
})
