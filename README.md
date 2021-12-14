# Proof of Concept advent calendar 

## Install

Create an account at graphcms.com, create a schema containing the following values:

adventDate `Date, Required, Unique`  
automaticallyActivate `Boolean, Required`   
isActive `Boolean`  
adventImageClosed `Asset, Required`  
adventImageOpen `Asset`  
isExpired `Asset`  
adventImageExpired `Asset`  
adventContent `RichText`  

set the endpoint to public read.  
copy .env.example to .env.local and set the graphcms endpoint

## Development

```bash
yarn install
yarn dev
```

## Deployment

```bash
yarn build
yarn next export
```
