module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, options) => {
      // Modify webpack config here
      config.module.rules.push({
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, // 30kb
          },
        },
      });

      return config;
    },
  };
};
