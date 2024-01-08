<p align="center">
CartOS - A Cart-Only eCommerce System build on NestJS, Mongo, Kafka, and DryerJS 
</p>



## Description

An eCommerce System built for the Modern Commerce Stack focused
on delivering powerful and flexible checkout and order capabilities and easy integration with other systems. Designed to work "out of the box" for most people.

Works with CatalogOS to provide a full eCommerce solution

## Features
* Flexible checkout flows
* No-cart checkout
* Promotions
* Multiple fulfillment types (Shipping, Download, Pickup, etc.)
* Mutiple fulfillment methods (UPS, FedEx, USPS, etc
* Multiple payment types (Credit Card, PayPal, COD, etc.)
* Multiple payment methods (Stripe, Braintree, etc)
* Configurable Webhooks
* Micro-service integration via Kafka
* Multiple product types
* Multi-warehouse inventory

## Installation

```bash
$ git clone git@github.com:Phoenix-Commerce/cartOS.git
$ cd cartOS
$ npm install
$ docker-compose up
$ mv .env.example .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
