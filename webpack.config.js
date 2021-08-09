const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "SampleSearch",
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: [
    { react: "react" },
    { "react-dom": "react-dom" },
    { "@apollo/client": "@apollo/client" },
  ],
};
