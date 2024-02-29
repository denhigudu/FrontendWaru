import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import HeaderDash from "../layouts/HeaderDash";
import Leftsidebar from "../components/Leftsidebar";
import Rightsidebar from "../components/Rightsidebar";
import Footer from "../layouts/Footer";
import Middletopcont from "../components/Middletopcont";
import MidBottomcont from "../components/MidBottomcont";

function Dashboard() {
  const [error] = useState("");

  return (
    <div>
      <div>
        <HeaderDash />
        <Leftsidebar />
        <Rightsidebar />
        <Middletopcont />
        <MidBottomcont />
        {/* <Footer /> */}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Dashboard;
