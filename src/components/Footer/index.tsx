import React, { memo } from "react";

import { Footer } from "./style";

export default memo(function WYFooter() {
  return (
    <Footer>
      <div>
        <div>图标</div>
        <div>
          <div>歌曲信息</div>
          <div>author</div>
        </div>
        <div>
          <div>control</div>
          <div>progress</div>
        </div>
        <div>setting</div>
      </div>
    </Footer>
  );
});
