const path = require('path');
//配置完毕后，以后打包直接在控制台输入  webpack 即可
module.exports = {
    entry:'./src/js/main.js',
    output:{
        filename:'bundle.js',
        path : path.resolve(__dirname,'dist/js')
    },
    module:{
        rules:[
            //npm install css-loader style-loader --save-dev
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // > npm install file-loader --save-dev
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
};
