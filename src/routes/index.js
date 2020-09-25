import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Dashboard,
  Pedidos,
  Productos,
  Promo,
  Encuestas,
  Usuarios,
  Notificaciones,
} from "../containers";
import {
  DASHBOARD,
  PEDIDOS,
  PRODUCTOS,
  PROMOCIONES,
  ENCUESTAS,
  USUARIOS,
  NOTIFICACIONES,
} from "./paths";

const Routes = () => (
  <Switch>
    <Route exact path={DASHBOARD} component={Dashboard} />
    <Route path={PEDIDOS} component={Pedidos} />
    <Route path={PRODUCTOS} component={Productos} />
    <Route path={PROMOCIONES} component={Promo} />
    <Route path={ENCUESTAS} component={Encuestas} />
    <Route path={USUARIOS} component={Usuarios} />
    <Route path={NOTIFICACIONES} component={Notificaciones} />
  </Switch>
);

export default Routes;
