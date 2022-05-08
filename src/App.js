import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const RenderComponent = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <RenderComponent />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </React.Suspense>
    </Router>
  );
};

export default App;
