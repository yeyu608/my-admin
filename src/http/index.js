import axios from'axios';


// 获取token方法
function getToken(){
    return sessionStorage.getItem('token')
}

let service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/9f2a8cf4728104ba852aafaf1c412248/react',
    timeout: 6000 //
})

// 创建请求拦截

service.interceptors.request.use(
    config => {
        if(getToken()){
            config.headers['token'] = getToken()
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
)


// 创建响应拦截

service.interceptors.response.use(
    response => {
        let res= response.data
        return res
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
)

export default service