//定义配置
module.exports={

    mode:'development',

    //入口
    entry:'./modules/main.js',

    //出口
    output:{
        filename:'haha.js'
    },
    //配置加载计
    module:{
        //定义规则
        rules:[
            //配置css
            {
                test:/.\css$/,
                loader:'style-loader!css-loader'
            },
            //less加载机
            {
                test:/.\less$/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    }
}