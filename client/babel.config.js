module.exports = function(api) {
    api.cache.using(() => process.env.NODE_ENV);

    var presets = [ ["@babel/env", { modules: api.env("test") ? "commonjs" : false }], "@babel/react", "@babel/flow" ];

    return { presets };
}
