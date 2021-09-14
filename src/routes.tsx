import React from "react";
import { BrowserRouter,Route } from "react-router-dom";

import CaioPort from "./pages/CaioPort";
import MagnoPort from "./pages/MagnoPort";
import MiguelPort from "./pages/MiguelPort";
import FelipePort from "./pages/FelipePort";
import JohurPort from "./pages/JohurPort";

import FrontPage from "./pages/FrontPage";

function Routes() {
    return(
    <BrowserRouter>
    <Route path="/" exact component={FrontPage}/>
    <Route path="/Caio" exact component={CaioPort}/>
    <Route path="/Magno"exact component={MagnoPort}/>
    <Route path="/Miguel" exact component={MiguelPort}/>
    <Route path="/Felipe" exact component={FelipePort}/>
    <Route path="/Johur" exact component={JohurPort}/>
    </BrowserRouter>
    );
}
export default Routes;