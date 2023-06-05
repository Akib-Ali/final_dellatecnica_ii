import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './components/pages/index'
import Category from "./components/pages/Category";

function App() {
  return (
    <BrowserRouter>
      {
        routes.map((data, idx) => (
          <Route exact path={data.path} component={
            data.component === Category ? () => 
            <Category category={data.path === '/holzmac' ? 'Holzmac' : 'Promac'} /> : data.component
          } key={idx}></Route>
        ))
      }
    </BrowserRouter>
  );
}

export default App;
