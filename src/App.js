import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import "./FontLogo/index.js";


import HomePage from "./Pages/Home/Home";

import Header from "./Composant/Header/Header";
import Footer from "./Composant/Footer/Footer";

function App() {
  return (
    <Suspense fallback={(<div>Chargement...</div>)}>
      <Header />
        <Switch>
          <Route exact path="/" component={(HomePage)} />
        </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
