'use strict';

const uuid = require('uuid');
const aws = require('aws-sdk');

aws.config.setPromisesDependency(require('bluebird'));
const dynamodb = new aws.DynamoDB.DocumentClient();

module.exports.submit = async (event, context, callback) => {
    console.log(`${event.payload}`);
    // const reqBody = JSON.parse(event.body);
    const fullName = event.payload.fullName;
    const email = event.payload.email;
    const experience = event.payload.experience;

    if (typeof fullName !== 'string' || typeof email !== 'string'
        || typeof experience !== 'number') {
        console.error('Validation Failure')
        callback(new Error('Couldn\'t submit candidate because of validation errors.'));
        return;
    }

    submitCandidateP(candidateInfo(fullName, email, experience))
    .then(res => {
        console.log(`${res}`)
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: `Successfully submitted candidate with email ${email}`,
                candidateId: res.id
            })
        })
    })
    .catch(err => {
        console.error(`${err}`);
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                message: `Unable to submit candidate with email ${email}`
            })
        })
    });
};

const submitCandidateP = candidate => {
    const candidateRow = {
        TableName: process.env.CANDIDATE_TABLE,
        Item: candidate
    };
    console.log(`Submitting candidate: ${JSON.stringify(candidateRow)}`);
    return dynamodb.put(candidateRow, (err, data) => {
                if (err) console.error(err);
                else console.log(data);
            })
            .promise()
            .then(res => candidate);
};

const candidateInfo = (fullName, email, experience) => {
    const timestamp = new Date().getTime();
    console.log(`Building candidate - fullName: ${fullName}, email: ${email}, experience: ${experience}`);
    return {
        id: uuid.v1(),
        fullName: fullName,
        email: email,
        experience: experience,
        submittedAt: timestamp,
        updatedAt: timestamp
    };
};