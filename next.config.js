// const withCSS = require("@zeit/next-css");

// module.exports = withCSS({
//   webpack(config, options) {
//     // Exclude CSS files from asset module handling
//     config.module.rules.push({
//       test: /\.(png|svg|jpg|jpeg|gif)$/i,
//       type: "asset",
//       parser: {
//         dataUrlCondition: {
//           maxSize: 30 * 1024, // 30kb
//         },
//       },
//     });

//     // Handle CSS files with style-loader and css-loader
//     config.module.rules.push({
//       test: /\.css$/,
//       use: ["style-loader", "css-loader"],
//     });

//     return config;
//   },
// });
