const path = require('path')
const { override, addWebpackAlias, adjustStyleLoaders } = require('customize-cra');
const closeMap = config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config
}
module.exports = override(
    // 设置别名路径
    addWebpackAlias({ //路径别名
        '@': path.resolve(__dirname, 'src'),
    }),
    adjustStyleLoaders((rule) => {
        if (rule.test.toString().includes('scss')) {
            rule.use.push({
                loader: require.resolve('sass-resources-loader'),
                options: {
                    resources: [
                        './src/styles/vars.scss',
                    ]
                }
            });
        }
    }),
    closeMap
)