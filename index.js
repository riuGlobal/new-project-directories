#!/usr/bin/env node
const mkdirp = require('mkdirp')


if (!process.env.npm_config_project) {
    // throw new Error ('Missing project name. Type: npm run help if needed')
    console.log('Missing project name. Type: npm run help if needed')
    process.exit(0)
}

const PROJECT_NAME = process.env.npm_config_project;

mkdirp.sync(`${PROJECT_NAME}/environment`)
mkdirp.sync(`${PROJECT_NAME}/access`)
mkdirp.sync(`${PROJECT_NAME}/info`)
mkdirp.sync(`${PROJECT_NAME}/incidents`)
mkdirp.sync(`${PROJECT_NAME}/sec`)
