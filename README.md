# Kendra Query API Example

[Amazon Kendra](https://aws.amazon.com/kendra/) is a highly accurate and easy to use enterprise search service that’s powered by machine learning. This example demostrates how to build a query api endpoint for Amazon Kendra. 

The stack uses
* [AWS Lambda](https://aws.amazon.com/lambda/) to interact with Amazon Kendra SDK.
* [AWS API Gateway](https://aws.amazon.com/api-gateway/) to expose api endpoint and integrate with the lambda.
* [AWS CDK](https://aws.amazon.com/cdk/) to provision the infrastructure. 
   
## Prerequisites

* a [Kendra index](https://docs.aws.amazon.com/kendra/latest/dg/hiw-index.html) 

## Set up

```bash
npm install
```

And you need to update the kendra index configuration in the `./bin/kendra-query-api.ts` file. 

## Deploy

 ```bash
cdk bootstrap
cdk deploy
```

## Usage

Now you can query the kendra index by sending get request to 

`https://<api_gateway_url>/?queryText=<queryText>&pageNumber=1`

## UI Example

You can use [kendra-ui-example]( https://github.com/elangovana/kendra-ui-sample) as a starting point to build a UI interacting with the query api endpoint.


