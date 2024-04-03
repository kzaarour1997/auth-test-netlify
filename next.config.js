module.exports = (phase, { defaultConfig }) => {
  return {
    webpack: (config, options) => {
      // Modify webpack config here
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      });

      return config;
    },
  };
};
