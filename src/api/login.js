import request from "../utils/http";
// export function loginData(params) {
//     return request.post('/api/login', params);
//  }

const login = {
    logined(params) {
        return request.post('/api/login', params);
    }
}
export default login;