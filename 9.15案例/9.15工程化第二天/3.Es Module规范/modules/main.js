//引入所有的接口
// import * as C from './common';
// console.log(111,C);

//引入某些接口
/* import {msg,num} from'./common';
console.log(msg,num); */

//引入默认接口
/* import c from './common';
console.log(c);  //他会输出函数 默认为函数接口
console.log(1,2);//作为方法使用 3 */


//要想全部引入直接使用的话 可以用默认接口和某些接口组合
/* import c,{msg,num,color} from './common'
console.log(c,num,color,msg); */


//将样式文件作为模块使用 (作为模块用虽然可以 但是没有意义 打印出来的是空对象)
  //对样式文件来说 他的后缀名称必须补全
/* import c from './style.css';
console.log(c);
 */

//对于样式文件来说 可以直接导入
import './style.css';



