const path = require('path');
module.exports = {
    name: 'wordrelay-setting', // 상관없음 
    mode: 'development',
    devtool: 'eval', // 빠르게 하겠다는 뜻 
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: { // 입력 
        app: ['./client.jsx','./WordRelay.jsx'],
    },
    module : {
        rules : [{
            test: /\.jsx?/,
            loader : 'babel-loader',
            options : {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        }],
    },
    
    output: { // 출력 
        path: path.join(__dirname ,'dist'),
        filename: 'app.js'
    }, 
}