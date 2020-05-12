#!/usr/bin/env node
const mkdirp = require('mkdirp')

if (!process.argv[2]) {
    // throw new Error ('Missing project name. Type: npm run help if needed')
    console.log('Missing project name. Type: npm run help if needed')
    process.exit(0)
}

const PROJECT_NAME = process.argv[2]

mkdirp.sync(`${PROJECT_NAME}/environment`)
mkdirp.sync(`${PROJECT_NAME}/access`)
mkdirp.sync(`${PROJECT_NAME}/info`)
mkdirp.sync(`${PROJECT_NAME}/incidents`)
mkdirp.sync(`${PROJECT_NAME}/sec`)
