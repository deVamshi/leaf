import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import "react-toastify/dist/ReactToastify.css";

// import { dotenv } from "dotenv";
// dotenv.config();

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // {/* </React.StrictMode> */}
);
