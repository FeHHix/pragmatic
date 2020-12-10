const path = require('path');

module.exports = {
    createWebpackConfig: (options) => {
        const {
            appPath,
            dts = true,
            webpackConfig,
            webpackConfig: {devtool = 'inline-source-map', mode = 'development'},
        } = options;

        const config = {
            ...webpackConfig,

            devtool,
            mode,

            resolve: {
                extensions: ['js', 'ts', 'tsx', 'json', 'jsx'].map((ext) => `.${ext}`),
                modules: ['node_modules'],
                ...(webpackConfig.resolve || {}),
            },

            module: {
                rules: [
                    dts && {
                        test: /\.(js|jsx|ts|tsx)$/,
                        enforce: 'pre',
                        include: [path.join(appPath, 'src')],
                        use: [
                            {
                                loader: 'ts-loader',
                                options: {
                                    configFile: path.join(appPath, 'tsconfig.json'),
                                    compilerOptions: {
                                        declaration: true,
                                        declarationDir: 'build/types',
                                    },
                                    onlyCompileBundledFiles: true,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.(js|jsx|ts|tsx)$/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            presets: [
                                require.resolve('@babel/preset-env'),
                                require.resolve('@babel/preset-react'),
                                require.resolve('@babel/preset-typescript'),
                            ],
                        },
                    },
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                    ...(webpackConfig.rules || []),
                ].filter((r) => r),
            },
        };

        return config;
    },
};
