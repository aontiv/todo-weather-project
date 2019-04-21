module.exports = function(api) {
    api.cache.using(() => process.env.NODE_ENV);

    var presets = [ ["@babel/env", { modules: api.env("test") ? "commonjs" : false }], "@babel/react", "@babel/flow" ];
    var plugins = [ ["babel-plugin-styled-components", { "ssr": false }], "@babel/proposal-class-properties", "@babel/transform-async-to-generator" ];

    return { presets, plugins };
}
