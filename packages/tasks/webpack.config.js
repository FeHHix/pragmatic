const devUtils = require('@pragmatic/dev-utils');
const path = require('path');

module.exports = (env, argv) => {
    const config = devUtils.createWebpackConfig({
        appPath: path.resolve(__dirname),
        
        webpackConfig: {
            entry: {
                index: path.resolve(__dirname, 'src/index.ts'),
            },
    
            output: {
                filename: 'bundle.js',
                libraryTarget: 'umd',
                path: path.resolve(__dirname, 'build'),
            },
        },
    });

    console.log('webpackConfig', config);

    return config;
};
