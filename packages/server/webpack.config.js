const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const glob = require("glob");
module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  // entry: slsw.lib.entries,
  entry: () => {
    const globs = glob.sync(
      "./src/{controllers,entities,repositories,resolvers,routes,services}/*.ts", 
      { ignore: './src/**/*.d.ts' }
      ).reduce((entries, file) => {
      entries[file.replace(/^\.\//, "")] = file;
      return entries;
      // const entryName = path.basename(filename, '.ts');
      // return Object.assign({}, entries, {
      //   [entryName]: filename
      // });
    }, {});
    return {
      ...globs,
      ...slsw.lib.entries
    }
  },
    devtool: slsw.lib.webpack.isLocal ? 'cheap-module-eval-source-map' : 'source-map',
      resolve: {
      extensions: ['.mjs', '.json', '.ts'],
        symlinks: false,
          cacheWithContext: false,
  },
    output: {
      libraryTarget: 'commonjs',
      path: path.join(__dirname, '.webpack'),
      filename: '[name].js',
  },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.(ts)$/,
          loader: 'ts-loader',
          exclude: [
            [
              path.resolve(__dirname, 'node_modules'),
              path.resolve(__dirname, '.serverless'),
              path.resolve(__dirname, '.webpack'),
            ],
          ],
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
          },
        },
        // {
        //   test: /entities\/\/\.(tsx?)$/,
        //   loader: 'ts-loader',
        //   exclude: [
        //     [
        //       path.resolve(__dirname, 'node_modules'),
        //       path.resolve(__dirname, '.serverless'),
        //       path.resolve(__dirname, '.webpack'),
        //     ],
        //   ],
        //   options: {
        //     transpileOnly: true,
        //     experimentalWatchApi: true,
        //     name: '[name].[contenthash].[ext]',
        //     outputPath: 'entities/',
        //     publicPath: 'entities/'
        //   }
        // },
      ],
  },
    plugins: [
      // new ForkTsCheckerWebpackPlugin({
      //   eslint: true,
      //   eslintOptions: {
      //     cache: true
      //   }
      // })
    ],
};
