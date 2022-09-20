import React from "react";

import reactLogo from "../assets/react.svg";

import { Sidebar } from "flowbite-react";

import {
  ChartPieIcon,
  InboxIcon,
  ListBulletIcon,
  RadioIcon,
  ShoppingBagIcon,
  TableCellsIcon,
  UserIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function CutomSiderBar() {
  return (
    <div className="p-4 sticky top-0 rounded-md max-h-screen">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo href="#" img={reactLogo} imgAlt="Flowbite logo">
          Leaf
        </Sidebar.Logo>
        <Sidebar.Items className="bg-blue-200 p-10 " colo>
          <Sidebar.ItemGroup>
            <Link to="/">
              <Sidebar.Item className="bg-black" href="#" icon={ChartPieIcon}>
                Dashboard
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Link to="/addFarmer">
              <Sidebar.Item href="#" icon={ListBulletIcon}>
                Add Farmer Details
              </Sidebar.Item>
            </Link>

            <Link to="/addLand">
              <Sidebar.Item href="#" icon={InboxIcon}>
                Add Land Details
              </Sidebar.Item>
            </Link>
            <Link to="/addSample">
              <Sidebar.Item href="#" icon={UserIcon}>
                Add Sample Details
              </Sidebar.Item>
            </Link>
            <Link to="/addCost">
              <Sidebar.Item href="#" icon={ShoppingBagIcon}>
                Cost Details
              </Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={ListBulletIcon}>
              Farmer Details
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={InboxIcon}>
              Print Health Card
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={UserIcon}>
              Weather Details
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ShoppingBagIcon}>
              Land Report
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={TableCellsIcon}>
              Land-VI Map
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={RadioIcon}>
              NDVI-History
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={UserMinusIcon}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default CutomSiderBar;
