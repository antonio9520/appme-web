import React from "react";
import { Layout } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
