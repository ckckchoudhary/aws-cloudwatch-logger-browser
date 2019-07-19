const { Logger } = require('./index');
const logger = new Logger({
    logGroupName: 'test-group',
    logStreamName: 'test-stream-name',
    region: 'us-east-2',
    accessKeyId: 'testKeyId',
    secretAccessKey: 'testAccessKey',
    // uploadFreq: 10000, 	// Optional. Send logs to AWS LogStream in batches after 10 seconds intervals.
    local: false 		// Optional. If set to true, the log will fall back to the standard 'console.log'.
});
logger.log('Hello World from test project');