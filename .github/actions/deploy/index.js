const core = require('@actions/core');
const { execSync } = require('child_process');

function run(cmd, options = {}) {
  return execSync(cmd, {
    ...options,
    shell: '/bin/bash',
    encoding: 'utf-8',
  });
}

async function uploadToS3({ region, s3Bucket, buildPath }) {
  run(`aws --region ${region} s3 cp "${buildPath}" "s3://${s3Bucket}" --recursive`);
}

async function invalidateCloudFront({ region, cloudFrontDistributionId }) {
  run(
    `aws --region ${region} cloudfront create-invalidation --distribution-id ${cloudFrontDistributionId} --paths /*`,
  );
}

async function main() {
  const s3Bucket = process.env.S3_BUCKET;
  const cloudFrontDistributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;
  const region = process.env.AWS_REGION;
  const buildFolder = core.getInput('buildFolder');
  const buildPath = `./${buildFolder}`;

  await uploadToS3({ region, buildPath, s3Bucket });
  await invalidateCloudFront({ region, cloudFrontDistributionId });
}

main();
