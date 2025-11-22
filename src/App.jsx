import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/Aboutus";
import ContactUs from "./Pages/ContactUs/ContactUs";
import TeenagersPage from "./Pages/Services/TeenagersPage";
import HomeMakersPage from "./Pages/Services/HomeMakersPage";
import WorkingProfessionalsPage from "./Pages/Services/WorkingProfessionalsPage";
import SeniorCitizensPage from "./Pages/Services/SeniorCitizensPage";
import GRCPage from "./Pages/Services/GRCPage";
import SOCPage from "./Pages/Services/SOCPage";
import AppSecVAPTPage from "./Pages/Services/AppSecVAPTPage";
import IAMPage from "./Pages/Services/IAMPage";
import FMCGSectorPage from "./Pages/Services/FMCGSectorPage";
import BankingSectorPage from "./Pages/Services/BankingSectorPage";
import ManufacturingSectorPage from "./Pages/Services/ManufacturingSectorPage";
import InsuranceNBFCPage from "./Pages/Services/InsuranceNBFCPage";
import PharmaSectorPage from "./Pages/Services/PharmaSectorPage";
import NetworkDataSecurityPage from "./Pages/Services/NetworkDataSecurityPage";
import PageNotFound from "./Pages/ErrorPages/PageNotFound";
import ServicesPage from "./Pages/Services/ServicesPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<ServicesPage />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gen-z-edition" element={<TeenagersPage />} />
        <Route path="/griha-raksha" element={<HomeMakersPage />} />
        <Route path="/secure-mindset" element={<WorkingProfessionalsPage />} />
        <Route path="/secure-senior" element={<SeniorCitizensPage />} />

        <Route path="/governance-risk-and-compliance" element={<GRCPage />} />
        <Route
          path="/network-data-security"
          element={<NetworkDataSecurityPage />}
        />

        <Route path="/soc-training" element={<SOCPage />} />
        <Route path="/appsec-vapt" element={<AppSecVAPTPage />} />
        <Route path="/iam-training" element={<IAMPage />} />
        <Route path="/fmcg-sector" element={<FMCGSectorPage />} />

        <Route path="/banking-sector" element={<BankingSectorPage />} />
        <Route
          path="/manufacturing-sector"
          element={<ManufacturingSectorPage />}
        />
        <Route path="/insurance-nbfc" element={<InsuranceNBFCPage />} />
        <Route path="/pharma-sector" element={<PharmaSectorPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
