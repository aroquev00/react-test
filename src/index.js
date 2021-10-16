import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";
import 'bootstrap/dist/css/bootstrap.min.css';


import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Nosotros from './components/nosotros/Nosotros';
import Servicios from './components/servicios/Servicios';
import Contacto from './components/contacto/Contacto';
/*Pagina de TEC*/
ReactDOM.render(
  <Router>
  <div>
    <Switch>

        {/* Páginas */}
        <Route exact path='/' component={Home} />
        <Route path='/nosotros' component={Nosotros} />
        <Route path='/servicios' component={Servicios} />
        <Route path='/contacto' component={Contacto} /> 
        <Route path='/gato' component={Game} />
      </Switch>
  </div>
</Router>,
  document.getElementById('root')
);

//ReactDOM.render(<Game />, document.getElementById("root"));

