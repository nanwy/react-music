import { SERVER } from '@/common/server'
import axios,{AxiosRequestConfig,ResponseType,AxiosInstance} from 'axios'


const TIME_OUT = 5000

const createInstance = ()=>{
    const instance = axios.create({
        baseURL:SERVER,
        timeout:TIME_OUT
    })
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        if(err && err.response){
            console.log('请求失败');
        }
    })
    return instance
}

interface Instance extends AxiosInstance {
    (config:AxiosRequestConfig):Promise<any>
}

const instance: Instance = createInstance()
export default instance