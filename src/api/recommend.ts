import instance from "@/api/axios"

export const getBanners = ()=>{
    return instance({
        url:'/banner'
    })
}