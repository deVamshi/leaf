import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

// >>New - Configuring Auth Module
Auth.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
