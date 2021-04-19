import React, { memo } from "react";
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";
import { HashRouter as Router } from "react-router-dom";
//功能
import routes from "@/router";
import store from './store'
import { LayoutMain } from "./style";
//工具

//组件
import WYHeader from "@/components/Header";
import WYAside from "./components/Slide";
import WYFooter from "@/components/Footer";

const App:React.FC = ()=> {
  return (
<Provider store={store}>
<Router>
      <WYHeader />
      <LayoutMain>
        <WYAside />
        {renderRoutes(routes)}
      </LayoutMain>
      <WYFooter />
    </Router>
</Provider>
  );
}
export default memo(App);
