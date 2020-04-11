const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");

module.exports = withPlugins([[withSass], [withImages]], {
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                },
            });
        }
        return config;
    },
    env: {
        apiUrl: 'https://eems-rest.local',
        clientId: 2,
        clientSecret: 'KxHlJZAH8HiRn1yFGoFW6I2Q9QL02zknntIhBvq9'
    },
});
