//定义配置对象
let config = {
    //定义环境
    mode:'development',

    //入口配置
    entry:'./modules/main.js',

    //出口
    output: {
        filename:'[name].js'
    },
    //配置加载机:
    module:{
        // 定义规则
        rules:[
            //每一项表示一条规则对象
            {
                // test:表示正则匹配
                test:/\.css$/,
                //loader  使用加载及
                loader:'style-loader!css-loader',

                //当需要传递其他配置的时候  还可以使用use属性 数组形式
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

//暴露接口
module.exports = config;
