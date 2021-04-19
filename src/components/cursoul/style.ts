import styled from "styled-components";

export const TopBannersClass = styled.div`
  width: 100%;
  height: 270px;
  text-align: center;
  padding: 10px 0;
  position: relative;
  perspective: 800px;
  &.mask {
    .slider-item {
      &.next,
      &.prev {
        filter: brightness(50%)
      }
    }
  }
  .slider-content {
    position: relative;
    width: 100%;
    height: 100%;
    .slider-item {
      position: absolute;
      top: 0;
      left: 50%;
      width: 65%;
      height: 100%;
      border-radius:8px;
      overflow:hidden;
      transform: translate3d(-50%, 0, -80px);
      transform-origin: bottom;
      transition: all 0.8s ease-in;
      transition-duration: 500ms;
      z-index: 1;
      cursor: pointer;
      img{
          width:100%;
          height:100%;
      }
      &.active {
        transform: translate3d(-50%, 0, 0px);
        z-index: 3;
      }
      &.next {
        transform: translate3d(-25%, 0, -150px);
        z-index: 2;
      }
      &.prev {
        transform: translate3d(-75%, 0, -150px);
        z-index: 2;
      }
    }
  }

  .dots {
    width: 100%;
    height: 20px;
    span {
      display: inline-block;
      width: 20px;
      height: 2px;
      margin: 1px 3px;
      cursor: pointer;
      background-color: #eee;
      opacity: 0.8;
      &.active {
        background-color: rgb(248, 85, 85);
      }
    }
  }
`;
