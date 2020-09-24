import React from "react";
import "./Header.css";

const Header = (props) => {
  const { open, setOpen } = props;
  return (
    <div className={open ? "contenedor-header-mini" : "contenedor-header"}>
      <button className="btn-open-sidebar" onClick={() => setOpen(!open)}>
        <p>abrir</p>
      </button>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
