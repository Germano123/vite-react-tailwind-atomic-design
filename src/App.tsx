import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from 'react';

const routes = [
  { path: "/", component: lazy(() => import("./components/pages/boilerplate")) },
  { path: "/login", component: lazy(() => import("./components/pages/login")) },
  { path: "/register", component: lazy(() => import("./components/pages/register")) },
]

const App: React.FC = () => {
  return (
    <Router>
      {/* TODO: create an animated component for loading page */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          { routes.map((route, index) => {
            return <Route
            key={ `route-${index}` }
            path={ route.path }
            element={ <route.component /> } 
            />
          }) }
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
