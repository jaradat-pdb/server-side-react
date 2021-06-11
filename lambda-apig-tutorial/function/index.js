const AWS = require('aws-sdk')
// create client outside of handler to reuse
const lambda = new AWS.Lambda()

// handler
exports.handler = async function(event, context) {
  console.log(`## ENVIRONMENT VARIABLES: ${serialize(process.env)}`)
  console.log(`## CONTEXT: ${serialize(context)}`)
  console.log(`## EVENT: ${serialize(event)}`)

  try {
    let accountSettings = await getAccountSettings()
    return formatResponse(serialize(accountSettings.AccountUsage))
  }
  catch(e) {
    return formatError(e)
  }
}

var formatResponse = function(body) {
  var res = {
    "statusCode": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "isBase64Encoded": false,
    "multiValueHeaders": {
      "X-Custom-Header": ["Value 1", "Value 2"]
    },
    "body": body
  }
  return res
}

var formatError = function(error) {
  var res = {
    "statusCode": error.statusCode,
    "headers": {
      "Content-Type": "text/plain",
      "x-amzn-ErrorType": error.code
    },
    "isBase64Encoded": false,
    "body": error.code + ": " + error.message
  }
  return res
}

// use sdk client
var getAccountSettings = function() {
  return lambda.getAccountSettings().promise()
}

var serialize = function(obj) {
  return JSON.stringify(obj, null, 2)
}
