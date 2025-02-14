const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        agents: './src/js/agents.js',
        login: './src/js/login.js',
        signup: './src/js/signup.js',
        forgotPassword: './src/js/forgotPassword.js',
        verifyCode: './src/js/verifyCode.js',
        favourite: './src/js/favourite.js',
        contacts: './src/js/contacts.js',
        privacyPolicy: './src/js/privacyPolicy.js',
        property: './src/js/property.js',
        product: './src/js/product.js'
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

module.exports = config;
