const core = require('@actions/core');

function main() {
  const s3Bucket = core.getInput('s3Bucket');
  console.log('s3 bucket: ', s3Bucket);
  const cfDistributionId = core.getInput('cfDistributionId');
  console.log('cf distribution id: ', cfDistributionId);
}

main();
