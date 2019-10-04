const path = require('path');
const webpack = require('webpack'); 
module.exports = {
    name: 'wordrelay-setting', // 상관없음 
    mode: 'development',
    devtool: 'eval', // 빠르게 하겠다는 뜻 
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: { // 입력 
        app: ['./client.jsx','./NumberBaseball.jsx'],
    },
    module : {
        rules : [{
            test: /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets: [
                    ['@babel/preset-env',{
                        targets: {
                            browsers: ['> 5% in KR','last 2 chrome versions'], //browserslist
                        },
                        debug: true
                    }],
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output: { // 출력 
        path: path.join(__dirname ,'dist'),
        filename: 'app.js'
    }, 
}