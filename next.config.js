module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, options) => {
      // Modify webpack config here
      config.module.rules.push({
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      });

      return config;
    },
  };
};
