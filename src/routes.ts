import { lazy } from 'react';

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./components/pages/login")),
  },
  {
    path: "/home",
    component: lazy(() => import("./components/pages/boilerplate")),
    layout: lazy(() => import("./components/templates/defaultlayout"))
  },
  {
    path: "/register",
    component: lazy(() => import("./components/pages/register")),
    layout: lazy(() => import("./components/templates/defaultlayout"))
  },
];
