import AddFarmerDetails from "./components/add_farmer_details";
import CutomSiderBar from "./components/custom_sidebar";
import FarmerDetails from "./components/farmer_details";
import CustomFooter from "./components/custom_footer";
import "./App.css";
import CostDetails from "./components/cost_details";
import AddLand from "./components/add_land";
import SampleDetails from "./components/sample_details";
import { Routes, Route } from "react-router-dom";

import { withAuthenticator, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";

import { Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { ToastContainer } from "react-toastify";

function App({ signOut, user }) {
  useEffect(() => {
    console.log("Ran Use Effect for Auth");
    Auth.configure(awsconfig);
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="flex h-screen bg-gray-100">
        <CutomSiderBar logout={signOut} />

        <div className="flex-grow px-8 pt-6 h-screen overflow-scroll flex flex-col justify-between">
          <div className="mb-4">
            <Routes>
              <Route path="/" element={<FarmerDetails />} />
              <Route path="/addFarmer" element={<AddFarmerDetails />} />
              <Route path="/addLand" element={<AddLand />} />
              <Route path="/addCost" element={<CostDetails />} />
              <Route path="addSample" element={<SampleDetails />} />
            </Routes>
          </div>
          <div className=" mt-auto">
            <CustomFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
