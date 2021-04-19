import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import * as actionTypes from "./store/constants";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getActionBanners } from "./store/actionCreators";
import { RouteConfig } from "react-router-config";
import { TopBannersClass } from "./c-nps/top-banners/style";
import WYBanners from "./c-nps/top-banners";
interface RecommendProps extends RouteConfig {}
const WYRecommend: React.FC<RecommendProps> = (props) => {
  // const useInterval = (callback: () => void, delay?: number | null) => {
  //   const savedCallback = useRef<() => void>(() => {});

  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   });

  //   useEffect(() => {
  //     if (delay !== null) {
  //       const interval = setInterval(() => savedCallback.current(), delay || 0);
  //       return () => clearInterval(interval);
  //     }

  //     return undefined;
  //   }, [delay]);
  // };
  // useInterval(() => {
  //   if (!topBanners.length) {
  //     return;
  //   }
  //   setCurrentIndex((currentIndex + 1) % topBanners.length);
  // }, 2000);
  //   const savedCallback = useRef<() => void>(() => {});

  // useEffect(() => {
  //   savedCallback.current = callback;
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCurrentIndex(++currentIndex % topBanners.length)
  //     // next()
  //     setCurrentIndex(++currentIndex % topBanners.length);
  //     console.log(currentIndex, topBanners, currentIndex % topBanners.length);
  //   }, delay);
  //   return () => clearInterval(interval);
  // }, [topBanners]);

  // useEffect(()=>{
  //   getClassName(currentIndex)
  // },[currentIndex])
  // const getClassName = useMemo(() => {
  //   const len = topBanners
  //     const prev:number = currentIndex === 0 ? topBanners.length - 1 : currentIndex -1
  //     const next:number = currentIndex === topBanners.length - 1 ? 0 : currentIndex + 1
  //     // const prev = (currentIndex - 1 + len) % len
  //     // const next = (currentIndex + 1) % len
  //     console.log(prev,next,currentIndex,topBanners)
  //     // switch (i){
  //     //   case currentIndex:
  //     //     return 'active'
  //     //   case next:
  //     //     return 'next'
  //     //   case prev:
  //     //     return 'prev'
  //     //   default:
  //     //   return ''
  //     // }
  //     return {
  //       [currentIndex]:'active',
  //       [prev]:'prev',
  //       [next]:'next'
  //     }
  // }, [currentIndex])
  return (
    <div>
      <h2>WYRecommend,</h2>
      <WYBanners></WYBanners>
    </div>
  );

  // function getClassName(i:number){
  //   const prev:number = currentIndex === 0 ? topBanners.length - 1 : currentIndex - 1
  //   const next:number = (currentIndex === topBanners.length - 1) ? 0 : currentIndex + 1
  //   switch (i){
  //     case currentIndex:
  //       return 'active'
  //     case next:
  //       return 'next'
  //     case prev:
  //       return 'prev'
  //     default:
  //     return ''
  //   }
  // }
};
export default memo(WYRecommend);

// const mapStateToProps = state=>({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch=>({
//   getBanners:()=>{
//     dispatch(getActionBanners())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(WYRecommend))
