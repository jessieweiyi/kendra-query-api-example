#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { KendraQueryApiStack } from '../lib/kendra-query-api-stack';

const app = new cdk.App();

const kendraQueryApiConfig = {
    kendraIndexRegion: 'us-west-2',
    kendraIndexId: ''
}

new KendraQueryApiStack(app, 'KendraQueryApiStack', kendraQueryApiConfig);
