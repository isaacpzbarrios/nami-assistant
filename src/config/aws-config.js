import AWS from 'aws-sdk';

AWS.config.update({
  region: import.meta.env.VITE_AWS_REGION,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
});

const polly = new AWS.Polly();

export default polly;
