import path from "path";
import nodeExternals from "webpack-node-externals";
import NodemonPlugin from "nodemon-webpack-plugin";
import Dotenv from "dotenv-webpack";

export default {
  entry: "./src/server.ts", // Entry point to your server
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js", // Output the bundled file here
    clean: true, // Clean the output directory before every build
  },
  devtool: "source-map", // Use source maps for debugging
  target: "node", // Make sure this is targeting Node.js
  externals: [nodeExternals()], // Prevent bundling node_modules in the output file
  plugins: [
    new NodemonPlugin({
      ext: "ts,js,json,hbs", // Monitor these file types for changes
    }),
    new Dotenv({
      path: "./.env", // Point to environment variables file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply ts-loader to TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.hbs$/, // Handle Handlebars files
        use: "handlebars-loader",
      },
      {
        test: /\.graphql$/, // Handle GraphQL files
        exclude: /node_modules/,
        use: "graphql-tag/loader",
      },
      {
        test: /\.js$/, // Make sure we get source maps for JavaScript
        loader: "source-map-loader",
        enforce: "pre",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve these extensions
  },
  node: {
    __dirname: false, // Preserve __dirname for Node.js modules
  },
};
