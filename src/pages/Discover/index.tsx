import { recommendMenu } from "@/common/local-data";
import React, { memo } from "react";
// import { getActionBanners } from './c-pages/recommend/store/actionCreators';
import { renderRoutes,RouteConfig } from 'react-router-config';
import { NavLink } from 'react-router-dom';
export default memo(function WYDiscover({route}:RouteConfig) {
  // const {route} = props
  return (
    <div style={{flex:1}}>
      {recommendMenu.map((item,index)=>{
        return(
          <NavLink to={item.link}>{item.title}</NavLink>
        )
      })}
      <h2>diver</h2>
      {renderRoutes(route.routes)}
    </div>
  );
});
