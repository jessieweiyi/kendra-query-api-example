import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import KendraQueryApi = require('../lib/kendra-query-api-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new KendraQueryApi.KendraQueryApiStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
