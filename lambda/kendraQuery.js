const AWS = require('aws-sdk');

exports.main =  async function(event) {
    const promise = new Promise(function(resolve) {
        AWS.config.region = process.env.KENDRA_INDEX_REGION;
        const kendra = new AWS.Kendra({apiVersion: '2019-02-03'}); 

        const kendraIndexId = process.env.KENDRA_INDEX_ID;
        const params = { IndexId: kendraIndexId, QueryText: event.queryStringParameters.queryText, PageNumber: parseInt(event.queryStringParameters.pageNumber) };
        
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,GET",
            "Access-Control-Allow-Headers": "Content-Type",
        }
        
        kendra.query(params, (error, response) => {
            if(error) {
                resolve({statusCode: 500,
                headers,
                body: JSON.stringify(error)});
            } else {
                resolve({statusCode: 200,
                    headers,
                    body: JSON.stringify(response)});
            }
        });
   
    });
    
    return promise;
};

