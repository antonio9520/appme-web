import React, { useState } from "react";
import "./Sidebar.css";
import { List, ListItem } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import logo from "../../../resources/img/Logotype-AppMe-White.png";

const Sidebar = (props) => {
  const [active, setActive] = useState("dashboard");
  const { open } = props;
  return (
    <div className={open ? "contenedor-sidebar-mini" : "contenedor-sidebar"}>
      <div className="header-sidebar">
        <img src={logo} alt="logo" className="logo-sidebar" />
      </div>
      <div className="sidebar-body">
        <List>
          <ListItem
            button
            onClick={() => setActive("dashboard")}
            className={active === "dashboard" ? "li-active" : "listitem"}
          >
            {/* <Link to="/" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
              Dashboard
            </p>
            {/* </Link> */}
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("ofertas")}
            className={active === "ofertas" ? "li-active" : "listitem"}
          >
            {/* <Link to="/ofertas-laborales" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>Pedidos</p>
            {/* </Link> */}
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("estudios")}
            className={active === "estudios" ? "li-active" : "listitem"}
          >
            {/* <Link to="/estudios" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
              Productos
            </p>
            {/* </Link> */}
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("certificados")}
            className={active === "certificados" ? "li-active" : "listitem"}
          >
            {/* <Link to="/certificaciones" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
              Promociones
            </p>
            {/* </Link> */}
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("adn-sap")}
            className={active === "adn-sap" ? "li-active" : "listitem"}
          >
            {/* <Link to="/sap-adn" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
              Encuestas
            </p>
            {/* </Link> */}
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("trabajos")}
            className={active === "trabajos" ? "li-active" : "listitem"}
          >
            {/* <Link to="/trabajos" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
              Usuarios
            </p>
            {/* </Link> */}
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("trabajos")}
            className={active === "trabajos" ? "li-active" : "listitem"}
          >
            {/* <Link to="/trabajos" className="link link-sidebar"> */}
            <Dashboard className="icon-sidebar" />
            <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
              Notificaciones
            </p>
            {/* </Link> */}
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
