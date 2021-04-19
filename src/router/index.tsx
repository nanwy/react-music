import { Redirect } from "react-router-dom";

import Discover from "@/pages/Discover";
import Friend from "@/pages/Friend";
import Mine from "@/pages/Mine";
import Recommend from '@/pages/Discover/c-pages/recommend'
import Artist from '@/pages/Discover/c-pages/artist'
import { RouteConfig } from 'react-router-config';
const routes:RouteConfig[] = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/discover"} />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact:true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path:'/discover/artist',
        component:Artist,
      }
    ]
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
    routes: [
      {
        path: "/friend",
        exact:true,
        render: () => (
          <Redirect to="/friend/recommend" />
        )
      },
      {
        path: "/friend/recommend",
        component: Recommend,
      },
      {
        path:'/friend/artist',
        component:Artist,
      }
    ]
  },
];

export default routes;
