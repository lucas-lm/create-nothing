# Simple CLI
[![Version](https://img.shields.io/npm/v/create-nothing.svg)](https://www.npmjs.com/package/create-nothing)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> A CLI that creates nothing

This project has didactic purposes only.

## Usage

**:warning: WARNING: This will create files, install packages and initialize a git repo in your current folder :warning:**

**:warning: DO NOT RUN THIS IN ANY FOLDER WHICH ALREADY IS A GIT REPO :warning:**

**:warning: CREATE AN EMPTY FOLDER TO TEST IT! :warning:**

With yarn:

```sh
yarn create nothing
```

With NPM:

```sh
npm init nothing
```

You can optionally pass a template as a param and some options.

Available templates:

- TypeScript
- JavaScript

Available options:

| Option | Alias | Type | What does it do? |
|----|---|---|---|
| --yes | -y | Boolean | Skip the prompt and take default answers to your nothing |
| --git | -g | Boolean | Initialize a git repo to your nothing |
| --install | -i | Boolean | Install the packages in the package.json of your nothing |


## Author

**Lucas Miranda <lucas-m@outlook.com>**
