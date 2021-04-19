
import { getBanners } from '@/api/recommend';
import * as actionTypes from './constants'
type GetBannerFn = () => Promise<actionTypes.IBanners[]>
const changeTopBannerAction = (res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})

export const getActionBanners = ()=>{
    return dispatch=>{
        getBanners().then(res=>{
            console.log(res)
            dispatch(changeTopBannerAction(res))
        })
    }
}