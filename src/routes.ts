import { lazy } from 'react';

export const routes = [
  {
    path: "/",
    component: lazy(() => import("./components/pages/login")),
  },
  {
    path: "/home",
    component: lazy(() => import("./components/pages/boileplate")),
    layout: lazy(() => import("./components/templates/defaultlayout"))
  },
  {
    path: "/dashboard",
    component: lazy(() => import("./components/pages/dashboard")),
    layout: lazy(() => import("./components/templates/defaultlayout"))
  },
];
