import React, { useState } from "react";
import "./Layout.css";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} />
      <main className={open ? "contenedor-main-mini" : "contenedor-main"}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
