import React, { Suspense } from "react";
import {
  HomePath,
  DashboardPath,
  AllFarmsPath,
  CreateNewFarmPath,
  FarmSystemPath,
  AnalyticsPath,
  OverviewPath,
  AmmoniaPath,
  GrowthRatePath,
  FeedRatePath,
} from "./Paths";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/loadingSpinner";
import Layout from "../components/layout";
// import Welcome from "../pages/Welcome";
const Home = React.lazy(() => import("../pages/Dashboard"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

const AllFarms = React.lazy(() => import("../pages/AllFarms"));
const CreateNewFarm = React.lazy(() => import("../pages/CreateNewFarm"));
const FarmSystem = React.lazy(() => import("../pages/FarmSystem"));
const Analytics = React.lazy(() => import("../pages/Analytics"));

const Overview = React.lazy(() => import("../pages/Overview"));
const Ammonia = React.lazy(() => import("../pages/Ammonia"));

const GrowthRate = React.lazy(() => import("../pages/GrowthRate"));
const FeedRate = React.lazy(() => import("../pages/FeedRate"));
const withSuspense = (WrappedComponent) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export default function Routing() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
       
        <Route
          key="Home"
          path={HomePath()}
          element={withSuspenseComponents(<Dashboard />)}
        />
        <Route
          key="Dashboard"
          path={DashboardPath()}
          element={withSuspenseComponents(<Dashboard />)}
        />
        <Route
          key="Analytics"
          path={AnalyticsPath()}
          element={withSuspenseComponents(<Analytics />)}
        >
          <Route
            key="Overview"
            path={OverviewPath()}
            element={withSuspenseComponents(<Overview />)}
          />
          <Route
            key="Ammonia"
            path={AmmoniaPath()}
            element={withSuspenseComponents(<Ammonia />)}
          />
          <Route
            key="FeedRate"
            path={FeedRatePath()}
            element={withSuspenseComponents(<FeedRate />)}
          />
          <Route
            key="GrowthRate"
            path={GrowthRatePath()}
            element={withSuspenseComponents(<GrowthRate />)}
          />
        </Route>
        <Route
          key="AllFarms"
          path={AllFarmsPath()}
          element={withSuspenseComponents(<AllFarms />)}
        />
      
        <Route
          key="CreateNewFarm"
          path={CreateNewFarmPath()}
          element={withSuspenseComponents(<CreateNewFarm />)}
        />
        <Route
          key="FarmSystem"
          path={FarmSystemPath()}
          element={withSuspenseComponents(<FarmSystem />)}
        />
      </Routes>
    </Suspense>
  );
}
