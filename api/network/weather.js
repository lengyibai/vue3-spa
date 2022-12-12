//#####··········域名管理··········#####//
// 通过 process.env.变量 来获取全局变量
const server = axios.create({
  baseURL: 'http://www.weather.com.cn',
});

//#####·········配置默认请求··········#####//
//####········GET请求········####//
export function getReq(url, params, other = {}) {
  return server({ method: 'GET', url, params, ...other });
}

//####········POST请求········####//
export function postReq(url, data, other = {}) {
  return upload({ method: 'POST', url, data, ...other });
}

//####········PUT请求········####//
export function putReq(url, data, other = {}) {
  return server({ method: 'PUT', url, data, other });
}

//####········DELETE请求········####//
export function delReq(url, data, other = {}) {
  return server({ method: 'DELETE', url, data, other });
}

//#####·········拦截器··········#####//
//####·······请求拦截器········####//
server.interceptors.request.use((config) => {
  // config.headers.token = localStorage.getItem('token');
  return config;
});

//####·······响应拦截器········####//
server.interceptors.response.use(
  (res) => {
    let code = res.data.code;
    return res;
  },
  () => {
    alert('请求失败！');
  }
);
