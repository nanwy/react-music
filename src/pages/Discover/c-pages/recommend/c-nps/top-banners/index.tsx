import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import * as actionTypes from "../../store/constants";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getActionBanners } from "../../store/actionCreators";
import { RouteConfig } from "react-router-config";
import { TopBannersClass } from "./style";
import WYCarousel from "@/components/cursoul";
interface RecommendProps extends RouteConfig {
  topBanners: actionTypes.IBanners[];
  //   enterLoading?: boolean;
  getBanners: () => void;
}
export default memo(function WYBanners() {
  const { topBanners } = useSelector(
    (state: RecommendProps) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  );
  // console.log(topBanners);
  let [currentIndex, setCurrentIndex] = useState<number>(0);
  const delay = 2000;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActionBanners());
  }, [dispatch]);

  const saveCallback = useRef<() => void>(() => {});
  let timer = useRef(0);
  useEffect(() => {
    saveCallback.current = next;
  });
  useEffect(() => {
    play();
  }, [topBanners]);
  const pause = () => {
    clearInterval(timer.current);
  };
  const play = () => {
    pause();
    timer.current = setInterval(() => {
      // setCurrentIndex(++currentIndex % topBanners.length)
      // next()
      // setCurrentIndex(++currentIndex % topBanners.length);
      saveCallback.current();
    }, delay);
    return () => clearInterval(timer.current);
  };
  const next = () => {
    setCurrentIndex(++currentIndex % topBanners.length);
  };

  const prev = () => {
    setCurrentIndex(
      currentIndex === 0 ? topBanners.length - 1 : currentIndex - 1
    );
  };
  const getClassName = useCallback(
    (i) => {
      // console.log(i)
      const prev: number =
        currentIndex === 0 ? topBanners.length - 1 : currentIndex - 1;
      const next: number =
        currentIndex === topBanners.length - 1 ? 0 : currentIndex + 1;
      // console.log(prev,topBanners)
      switch (i) {
        case currentIndex:
          return "active";
        case next:
          return "next";
        case prev:
          return "prev";
        default:
          return "";
      }
    },
    [currentIndex, topBanners]
  );
  const handlerChange = (index) => {
    setCurrentIndex(index);
  };

  const handlerClick = (e, index) => {
    if (index === currentIndex) {
    } else {
      let [, currentClass] = e.target.className.split(" ");
      if (currentClass === "next") {
        // console.log(e.target.className);
        next();
      } else {
        prev();
      }
    }
  };
  return (
    <div>
      <h2>WYRecommend,{currentIndex}</h2>
      <WYCarousel topBanners={topBanners} mask></WYCarousel>
    </div>
  );
});
