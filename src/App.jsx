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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gen-z-edition" element={<TeenagersPage />} />
        <Route path="/griha-raksha" element={<HomeMakersPage />} />
        <Route path="/secure-mindset" element={<WorkingProfessionalsPage />} />
        <Route path="/secure-senior" element={<SeniorCitizensPage />} />

        <Route path="/governance-risk-and-compliance" element={<GRCPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
