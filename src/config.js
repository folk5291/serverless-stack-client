const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HwClHFWpra7xD8SNRZFX42IFceaQLJTDTSHNLnHxcD8Ea8JJoFnN3HyNQeoR2FvPMXWG6U6N8ZaGzBMX19qUXJZ00bY2zRSgB",
    s3: {
        REGION: "us-east-2",
        BUCKET: "mynotesapibucketj",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://lom92px8vc.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_7TNRyjkMT",
        APP_CLIENT_ID: "3t6gfa6d9qoa6rp9cf7lh6pfli",
        IDENTITY_POOL_ID: "us-east-2:4ecd7c67-72c1-4494-8a69-7e7c3c181446",
    },
};

export default config;