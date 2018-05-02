'use strict';

import * as lambda from 'aws-lambda';

export const hello = (event: any, context: lambda.Context, callback: lambda.Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Cognito DynamoDB Typescript Sample! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
