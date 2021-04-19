import React, { memo } from "react";

import { HomeLinks } from "@/common/local-data";
import { Aside } from "./style";
import { NavLink } from "react-router-dom";

export default memo(function WYAside() {
  return (
    <Aside>
      {HomeLinks.map((item, index) => {
        return (
          <div key={index} className="select-list">
            {item.title && <div className="title">{item.title}</div>}
            {/* {console.log(item)} */}
            {/* <div>{item.title}</div> */}
            <div>
              {item.items.map((item1, index) => {
                return (
                  <div key={item1.title} className="select-item">
                    <NavLink to={item1.link}>
                      <div className="active-item item">{item1.title + index}</div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Aside>
  );
});
