import axios from 'axios'
import qs from 'qs'
import base from './base'

const instance = axios.create(
    {
        baseURL: '',
        //设置超时时间10s
        timeout: 1000 * 10
    }
)

/**
 * 设置跨域允许携带凭证
 */
instance.defaults.withCredentials = true

/**
 * 设置请求传递数据的格式
 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.transformRequest = data=>{
    qs.stringify(data)
}

/**
 * 设置请求拦截器
 * 客户发送请求 -> ['请求拦截器'] -> 服务器
 * token校验，接收服务器返回的token，存储到vuex/本地存储 中，
 * 每次请求，我们应该把token带上
 */
instance.interceptors.request.use((config)=>{
    // 携带token
    let token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config //一定要返回
},error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    //直接返回data
    return response.data
},error => {
    let {response} = error
    if (response) {
        //=>服务器返回了结果，按照预期处理
        switch (response.status) {
            case 401: //用户需要验证（用户未登录）
                
                break;
            case 403: //服务器理解请求，但是拒绝下一步执行 （token过期）
                break
            case 404: //找不到页面
                break
        }
    }else {
        //=> 服务器没有返回结果
        if (!window.navigator.onLine) {
            //断网处理，可以跳转到断网页面
            return
        }
        return Promise.reject(error)
    }
})

export default instance
