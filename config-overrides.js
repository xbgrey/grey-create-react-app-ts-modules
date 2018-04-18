/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {
    
    if(env === 'production'){
        config = require('./config/webpack.config.prod');
    }else{
        config = require('./config/webpack.config.dev');
    }

    const tsLoader = getLoader(
        config.module.rules,
        rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            })]
        })
    };

    return config;
}