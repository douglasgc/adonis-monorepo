# AdonisJS + React + AWS Serverless Arquieture

## How to Start

Install Dependencies

```bash
npm install
npx lerna bootstrap
```

CI/CD is setup for 2 different environments: `qa` (qa), `prod` (for production).

## Services

- common
- users
- app

## Pré-Requisitos

[Nodejs](https://nodejs.org/en/) (em versão pelo menos version 11)

ARNS da AWS `awscli` Instalada e configurada: <https://aws.amazon.com/getting-started/>

CircleCI [Conta](https://circleci.com/signup/)

Serverless [CLI](https://serverless.com/framework/docs/getting-started/)

## Repository structure

This repository uses [lerna] (https://lernajs.io/) and the yarn workspace to manage its dependencies.
All of our services must be inside the `services /` folder.
If necessary, you can leave codes used in multiple microservices in `services / common /`.
Javascript must be used in all services.

#### Enviroment

Configuration file in '.env'.

#### How to use CircleCI

Configure your AWS credentials in "enviroment variables"(circleci). 
To run the build, just create or commit something
To run the deploy to 'QA' just commit to the master.
To run the deploy to 'PROD' just create a TAG or release.

## Run the tests

```bash
npm test
```

```bash
npm coverage
```
