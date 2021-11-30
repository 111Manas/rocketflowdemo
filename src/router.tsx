import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import {
  HomePage,
  UserDetailsPage,
  UserVerificationPage,
} from "./components/pages";
/*
	@Dashboard Router
*/
import DashboardHome from "./components/pages/dashboard/home/home";
import DashboardEmployees from "./components/pages/dashboard/employees/employees";
import DashboardDetax from "./components/pages/dashboard/detax/detax";
import DashboardNps from "./components/pages/dashboard/nps/nps";
import DashboardAnalysis from "./components/pages/dashboard/analysis/analysis";
import DashboardTransaction from "./components/pages/dashboard/transaction/transaction";
import DashboardClaims from "./components/pages/dashboard/claims/claims";
import DashboardSettings from "./components/pages/dashboard/settings/settings";

export enum RoutePaths {
  Home = "/",
  UserDetails = "/user-details",
  UserVerification = "/user-verification",
  DashboardHome = "/dashboard",
  DashboardEmployees = "/dashboard/employees",
  DashboardDetax = "/dashboard/detax",
  DashboardNps = "/dashboard/nps",
  DashboardAnalysis = "/dashboard/analysis",
  DashboardTransaction = "/dashboard/transaction",
  DashboardClaims = "/dashboard/claims",
  DashboardSettings = "/dashboard/settings",
}

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.Home} element={<HomePage />} />
        <Route path={RoutePaths.UserDetails} element={<UserDetailsPage />} />
        <Route
          path={RoutePaths.UserVerification}
          element={<UserVerificationPage />}
        />
        <Route path={RoutePaths.DashboardHome} element={<DashboardHome />} />
        <Route
          path={RoutePaths.DashboardEmployees}
          element={<DashboardEmployees />}
        />
        <Route path={RoutePaths.DashboardDetax} element={<DashboardDetax />} />
        <Route path={RoutePaths.DashboardNps} element={<DashboardNps />} />
        <Route
          path={RoutePaths.DashboardAnalysis}
          element={<DashboardAnalysis />}
        />
        <Route
          path={RoutePaths.DashboardTransaction}
          element={<DashboardTransaction />}
        />
        <Route
          path={RoutePaths.DashboardClaims}
          element={<DashboardClaims />}
        />
        <Route
          path={RoutePaths.DashboardSettings}
          element={<DashboardSettings />}
        />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
