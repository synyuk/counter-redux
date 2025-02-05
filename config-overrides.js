const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = function override(config) {
    if (config.mode === "production") {
        config.optimization.minimizer.push(new HtmlMinimizerPlugin());
    }
    return config;
};
