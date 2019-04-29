module.exports = function(api) {
    api.cache.using(() => process.env.NODE_ENV);

    var presets = [ "@babel/env", "@babel/react" ];
    var plugins = [ "@babel/proposal-class-properties" ];

    return { presets, plugins };
}
