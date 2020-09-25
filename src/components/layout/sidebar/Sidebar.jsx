import React, { useState } from "react";
import "./Sidebar.css";
import { List, ListItem, Button } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../../resources/img/Logotype-AppMe-White.png";
// import dashboardIcon from "../../../resources/icons/AppMe-Admin-Platform-Icon-Dashboard-2.svg";
import { DashBoardIcon, PedidosIcon } from "./svg";

const Sidebar = (props) => {
  const [active, setActive] = useState("dashboard");
  const { open } = props;
  return (
    <div className={open ? "contenedor-sidebar-mini" : "contenedor-sidebar"}>
      <div className="header-sidebar">
        <img src={logo} alt="logo" className="logo-sidebar" />
      </div>
      <div className={open ? "sidebar-body-mini" : "sidebar-body"}>
        <List>
          <ListItem
            button
            onClick={() => setActive("dashboard")}
            className={active === "dashboard" ? "li-active" : "listitem"}
          >
            <Link to="/" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                {/* <img src={dashboardIcon} alt="dashboard icon" className="img-icon"/> */}
                <DashBoardIcon active={active} />
                {/* <Dashboard
                  className={
                    active === "dashboard"
                      ? "icon-sidebar-active"
                      : "icon-sidebar"
                  }
                /> */}
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Dashboard
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("pedidos")}
            className={active === "pedidos" ? "li-active" : "listitem"}
          >
            <Link to="/pedidos" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <PedidosIcon active={active} />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Pedidos
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("productos")}
            className={active === "productos" ? "li-active" : "listitem"}
          >
            <Link to="/productos" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard
                  className={
                    active === "productos"
                      ? "icon-sidebar-active"
                      : "icon-sidebar"
                  }
                />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Productos
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("promociones")}
            className={active === "promociones" ? "li-active" : "listitem"}
          >
            <Link to="/promociones" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard
                  className={
                    active === "promociones"
                      ? "icon-sidebar-active"
                      : "icon-sidebar"
                  }
                />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Promociones
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("encuestas")}
            className={active === "encuestas" ? "li-active" : "listitem"}
          >
            <Link to="/encuestas" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard
                  className={
                    active === "encuestas"
                      ? "icon-sidebar-active"
                      : "icon-sidebar"
                  }
                />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Encuestas
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("usuarios")}
            className={active === "usuarios" ? "li-active" : "listitem"}
          >
            <Link to="/usuarios" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard
                  className={
                    active === "usuarios"
                      ? "icon-sidebar-active"
                      : "icon-sidebar"
                  }
                />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Usuarios
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("notificaciones")}
            className={active === "notificaciones" ? "li-active" : "listitem"}
          >
            <Link to="/notificaciones" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard
                  className={
                    active === "notificaciones"
                      ? "icon-sidebar-active"
                      : "icon-sidebar"
                  }
                />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Notificaciones
              </p>
            </Link>
          </ListItem>
        </List>
      </div>
      <div className="body-bottom">
        <List>
          <ListItem
            button
            onClick={() => setActive("admin")}
            className={active === "admin" ? "li-active" : "listitem"}
          >
            <Link to="/admin" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard className="icon-sidebar" />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Administrador
              </p>
            </Link>
          </ListItem>
          <ListItem
            button
            onClick={() => setActive("logout")}
            className={active === "logout" ? "li-active" : "listitem"}
          >
            <Link to="/logout" className="link link-sidebar">
              <div className="cont-icon-sidebar">
                <Dashboard className="icon-sidebar" />
              </div>
              <p className={open ? "txt-sidebar-mini" : "txt-sidebar"}>
                Logout
              </p>
            </Link>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
