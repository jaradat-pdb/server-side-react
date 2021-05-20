console.log(`${new Date()} | Loading function`);

var aws = require('aws-sdk');
var dynamo = new aws.DynamoDB.DocumentClient();

/**
 * Provide an event that contains the following keys:
 *  - operation: one of the operations in the switch statement below
 *  - tableName: required for operations that interact with DynamoDB
 *  - payload: a parameter to pass to the operation being performed
 * @param {*} event 
 * @param {*} context 
 * @param {*} callback 
 */
exports.handler = (event, context, callback) => {
    console.log(`${new Date()} | Received event: ${JSON.stringify(event, null, 2)}`);

    if (event.tableName) {
        event.payload.TableName = event.tableName;
    }

    switch (event.operation) {
        case 'create':
            dynamo.put(event.payload, callback);
            break;
        case 'read':
            dynamo.get(event.payload, callback);
            break;
        case 'update':
            dynamo.update(event.payload, callback);
            break;
        case 'delete':
            dynamo.delete(event.payload, callback);
            break;
        case 'list':
            dynamo.scan(event.payload, callback);
            break;
        case 'echo':
            callback(null, 'Success');
            break;
        case 'ping':
            callback(null, 'pong');
            break;
        default:
            callback(`Unknown operation: ${event.operation}`);
    }
}