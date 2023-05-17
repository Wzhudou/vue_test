import axios from 'axios';
// 模拟一步数据调用
// export function getCourses() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([{name: 'test123'}, {name: 'test234'}]);
//         }, 2000)
//     })
// }
 export function getCourses() {
    return axios.get('/api/courses').then(res => res.data);
 }
