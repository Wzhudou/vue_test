// import axios from 'axios';
// 使用封装的axios
import request from "../utils/http";
// 模拟一步数据调用
// export function getCourses() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([{name: 'test123'}, {name: 'test234'}]);
//         }, 2000)
//     })
// }
 export function getCourses() {
    return request.get('/api/courses');
 }
