import { lazy } from 'react';

const routes = [
  {
    path: "/",
    component: lazy(() => import("./components/pages/login")),
  },
  {
    path: "/forgottenpass",
    component: lazy(() => import("./components/pages/forgottenpass")),
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
