import React from "react";
import { BrowserRouter,Route } from "react-router-dom";

import CaioPorti from "./pages/CaioPorti";
import FrontPage from "./pages/FrontPage";

function Routes() {
    return(
    <BrowserRouter>
    <Route path="/" exact component={FrontPage}/>
    <Route path="/caio" exact component={CaioPorti}/>
    </BrowserRouter>
    );
}
export default Routes;