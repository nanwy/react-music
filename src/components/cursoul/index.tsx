import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { TopBannersClass } from "./style";
interface IBanners {
  imageUrl: string;
  url: string;
  targetId: number;
  exclusive: boolean;
  titleColor: string;
  length: number;
  typeTitle: string;
}
interface TopBannersProps {
  topBanners: IBanners[];
  delay?:number;
  mask?:boolean
}
const WYCarousel: React.FC<TopBannersProps> = ({ topBanners,delay=2000,mask=false }) => {
  // const topBanners = props.topBanners;
  let [currentIndex, setCurrentIndex] = useState<number>(0);
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
    <TopBannersClass className={mask ? 'mask' : ''}>
      <div
        className="slider-content"
        onMouseOver={() => clearInterval(timer.current)}
        onMouseOut={() => play()}
      >
        {topBanners.map((item, index) => {
          const className = getClassName(index);
          return (
            <div key={item.imageUrl} className={`slider-item ${getClassName(index)}`}>
              <img
                src={item.imageUrl}
                alt={item.typeTitle}
                onClick={(e) => {
                  handlerClick(e, index);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="dots">
        {topBanners.map((item, index) => {
          return (
            <span
              key={item.imageUrl}
              className={`${currentIndex === index ? "active" : ""}`}
              onMouseOver={() => handlerChange(index)}
            ></span>
          );
        })}
      </div>
    </TopBannersClass>
  );
};
export default memo(WYCarousel);
