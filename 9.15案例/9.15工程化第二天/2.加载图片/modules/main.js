//引入图片
let url1 = require('./a5.jpg');
let url2 = require('./ad2.jpg');

console.log(111,url2);

// 创建图片元素
let img1 = new Image();
let img2 = new Image();

//设置路径
img1.src = url1;
img2.src = url2.default;  
//default "581459af20425a7d46c0c0e5306b5369.jpg"

//上树
document.body.appendChild(img1);
document.body.appendChild(img2);

