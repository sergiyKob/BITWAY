const config = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        agents: './src/js/agents.js',
        login: './src/js/login.js',
        signup: './src/js/signup.js',
        forgotPassword: './src/js/forgot-password.js',
        verifyCode: './src/js/verifyCode.js'
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
