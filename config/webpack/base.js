const path     = require('path');
const webpack  = require('webpack');

const distPath = path.join(__dirname, '../../dist/assets');
const srcPath  = path.join(__dirname, '../../src');

let config = {

  entry: {
    app      : `${srcPath}/index.js`,
    client   : `${srcPath}/client.js`,
    business : `${srcPath}/business.js`
  },

  output : {
    path       : distPath,
    filename   : '[name].js',
    publicPath : '/assets/'
  },

  module: {

    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')({ browsers: 'Android >= 2.3' })
                ];
              }
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')({ browsers: 'Android >= 2.3' })
                ];
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]'
            }
          },

          {
            loader: 'image-webpack-loader',
            query: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.svg$/,
        use: [
          'raw-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeViewBox: false },
                { removeTitle: true },
                { convertColors: { shorthex: true }},
                { convertPathData: true },
                { removeStyleElement: true },
                { removeUselessDefs: true }
              ]
            }
          }
        ]
      },
      {
        test: /\.(jsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-stage-0'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                helpers: false,
                polyfill: false,
                regenerator: true,
                moduleName: '@babel/runtime'
              }]
            ],
            babelrc: false,
            cacheDirectory: true
          }
        },
        include: [
          srcPath,
          path.join(__dirname, '../../node_modules/@hlj')
        ]
      },
      {
        test: /\.(jsx?)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: srcPath
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
    alias: {
      models     : `${srcPath}/models/`,
      actions    : `${srcPath}/actions/`,
      components : `${srcPath}/components/`,
      utils      : `${srcPath}/utils/`,
      sources    : `${srcPath}/sources/`,
      stores     : `${srcPath}/stores/`,
      styles     : `${srcPath}/styles/`,
      pages      : `${srcPath}/pages/`,
      images     : `${srcPath}/images/`,
      config     : `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  }

};

module.exports = config;

