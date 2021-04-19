import React, { memo } from "react";

// import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderWrapper, HeaderLeft } from "./style";

export default memo(function WYHeader() {
  return (
    <HeaderWrapper>
      <div className="wrapper">
        {/* <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/mine">发现音乐</NavLink>
        <NavLink to="/friend">发现音乐</NavLink> */}
        <HeaderLeft>
          <div className="logo">
            {/* <i>图标</i> */}
            <a href="/discover"> </a>
          </div>
          <div className="user-behavior">
            <div className="user-control">
              <i>后退</i>
              <i>前进</i>
            </div>
            <Input
              className="search"
              placeholder="音乐"
              prefix={<SearchOutlined />}
            />
            <div>语音输入</div>
          </div>
        </HeaderLeft>
        <div>
          <div>用户</div>
          <div>设置项</div>
        </div>
      </div>
    </HeaderWrapper>
  );
});
