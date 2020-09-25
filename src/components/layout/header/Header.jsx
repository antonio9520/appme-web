import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import {} from "@material-ui/icons"

const Header = (props) => {
  const { open, setOpen } = props;
  return (
    <div className={open ? "contenedor-header-mini" : "contenedor-header"}>
      <button className="btn-open-sidebar" onClick={() => setOpen(!open)}>
        <p>abrir</p>
      </button>
    </div>
  );
};

export default Header;
