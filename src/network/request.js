import Axios from 'axios';

export function request(config){
    //1.创建Axios的实例
    const instance=Axios.create({
        //公共url前缀（接口）
        baseURL:'https://localhost:44348/api/',
        //超时时间
        timeout:10000
    });

    //2.Axios的请求拦截器
    instance.interceptors.request.use(config=>{
        return config;
    },err=>{
        console.log(err);
    })

    //3.发送网络请求，axios本身的返回值就是promise
    return instance(config);
}