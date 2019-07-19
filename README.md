# AWS CloudWatch Logger For Browser and react-native

Fast & Simple Logging to AWS CloudWatch from browser. It logs in the background without blocking. By default, it will immediately send the log to your configured AWS LogStream. You can also easily configure it so that the logs are buffered for a specific period of time before being sent as a batch to AWS LogStream. This is the recommended way. 

Just a fork of https://www.npmjs.com/package/aws-cloudwatch-log.

For a quick recap on how logging on AWS CloudWatch works, refer to the [Annex below](#annex-short-explanation-about-logs-in-aws-cloudwatch).   

# Install
```
npm install aws-cloudwatch-log-browser --save
```

# How To Use It
## Basic
_IMPORTANT: In the example below, it is expected that both the __logGroupName__ and the __logStreamName__ have already been created in AWS CloudWatch. aws-cloudwatch-log provides an extra api to create a new logStreamName._

```js
const { Logger } = require('aws-cloudwatch-log-browser');

const config = { 
	logGroupName: 'YourGroupName', 
	logStreamName: 'YourLogStream', 
	region: 'ap-southeast-2', 
	accessKeyId: 'BLABLABLABLABLABLA', 
	secretAccessKey: 'some-very-long-secret', 
	uploadFreq: 10000, 	// Optional. Send logs to AWS LogStream in batches after 10 seconds intervals.
	local: false 		// Optional. If set to true, the log will fall back to the standard 'console.log'.
};

const logger = new Logger(config);

logger.log('Hello World');
logger.log(`I'm`, `aws-cloudwatch-log.`, `I can log many things at once, as well as objects as follow:`);
logger.log({ type: 'this-is-important', details: 'something has happened!' });
logger.log({ category: 'info', details: `I'm fast and lean. I don't block, and everything happens in the background!` });
```

> Notice that the configuration option __uploadFreq__ is set to 10,000 milliseconds. This option is optional. It it is not specified, it's default value is 0, which means that each _log_ action will immediately send the log to AWS LogStream.

## Development Mode
When testing your code locally, you can disable logging to AWS LogStream by setting the __local__ configuration to true. 

## Creating A LogStream
AWS deprecates the usage of the same LogStream by multiple concurrent machine. The recommended method is that each machine creates its own unique LogStream inside a specific LogGroup. To create a LogStream, you can proceed as follow:

```js
const { createLogStream } = require('aws-cloudwatch-log')

const config = { 
	logGroupName: 'YourGroupName', 
	region: 'ap-southeast-2', 
	accessKeyId: 'BLABLABLABLABLABLA', 
	secretAccessKey: 'some-very-long-secret', 
	local: false 		// Optional. If set to true, no LogStream will be created.
}

createLogStream('your-new-unique-logstream', config)
.then(data => console.log('Do whatever you want when it works.'))
.catch(err => console.log('Do whatever you want when it does not work.'))
```

# contact author
- ckckchoudhary@gmail.com
- https://facebook.com/xyzchetan
- https://www.linkedin.com/in/chetan-choudhary-3265a85a/

