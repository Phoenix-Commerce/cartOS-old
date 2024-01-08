<p align="center">
CartOS - A Cart-Only eCommerce System build on NestJS, Mongo, Kafka, and DryerJS 
</p>

## Description

An eCommerce System built for the Modern Commerce Stack focused
on delivering powerful and flexible checkout and order capabilities and easy integration with other systems. Designed to work "out of the box" for most people.

## Core Features
* "Big Microservice" architecture
* Multi-shop/tenant with product sharing
* Multi-lingual, multi-locale

### Product Features
* Promotions with flexible rules and actions
* Multiple product types (Flat, Product/Option/Variant, etc.)

### Payment Features
* Multiple payment types (Credit Card, PayPal, COD, etc.)
* Multiple payment methods (Stripe, Braintree, etc)
* Supports Multiple transaction emails and email vendors

### Fulfillment Features
* Multiple fulfillment types (Shipping, Download, Pickup, etc.)
* Mutiple fulfillment methods (UPS, FedEx, USPS, etc.)
* Multi-warehouse inventory

### Checkout Features
* Flexible checkout flows
* No-cart checkout

### Integration Features
* Define the shape of imports and exports through configuration. For example you can define the fields that are exported for an order trigger by order creation Hook
* Configurable Webhooks
* Micro-service integration via Kafka
* Optimized for data transfer in and out with transfer via bulk API or Kafka
* Event hooks for integration with other systems
* Support for API keys with permissions

### Infrastructure Features
* Built in Prometheus metrics
* Extensive Logging and Alerting
* Full test coverage
* Dockerized


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
