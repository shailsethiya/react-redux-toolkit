import React, { Suspense } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

import SuspenseLoader from "../components/loader/suspenseLoader/SuspenseLoader";
import { authSelector } from "../store/api/auth";

import { getRoutes } from "./config";

// const createRoutes = (routes) => {
//   return routes.map((route, key) => (
//     <Route {...route} key={key}>
//       {route?.subRoutes?.length > 0 && createRoutes(route.subRoutes)}
//     </Route>
//   ));
// };

function BaseRoutes() {
  const { token } = useSelector(authSelector, shallowEqual);
  const allRoutes = useRoutes(getRoutes(!!token));
  return (
    <Suspense fallback={<SuspenseLoader />}>
      {allRoutes}
      {/* <Routes>{createRoutes(allRoutes)}</Routes> */}
    </Suspense>
  );
}

export default BaseRoutes;
