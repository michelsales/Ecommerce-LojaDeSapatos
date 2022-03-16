import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Cart from "./pages/Cart";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route exact path="/">
                <Main/>
            </Route>
           <Route exact path="/carrinho" >
                <Cart/>
            </Route>
       </BrowserRouter>
   )
}

export default Routes;