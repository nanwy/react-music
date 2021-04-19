import React, { memo } from "react";
import { renderRoutes,RouteConfig } from 'react-router-config';
export default memo(function WYDiscover({route}:RouteConfig) {
  // const {route} = props
  console.log(route)
  return (
    <div>
      <h2>WYFriend</h2>
      {renderRoutes(route.routes)}
    </div>
  );
});
