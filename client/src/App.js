import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { Contact } from './pages/footerPages/contact';
import { DespreNoi } from './pages/footerPages/despreNoi';
import { TermeniSiConditii } from './pages/footerPages/termeniSiConditii';
import { PoliticaDeConfidentialitate } from './pages/footerPages/politicaDeConfidentialitate';
import { MetodaDePlata } from './pages/footerPages/metodaDePlata';
import { PoliticaDeRetur } from './pages/footerPages/politicaDeRetur';
import { GarantiaProduselor } from './pages/footerPages/garantiaProduselor';
import Home from './pages/home';
import Register from './pages/register';
import AdminDashboard from './pages/adminDashboard';
import UserDashboard from './pages/userDashboard';
import PrivateRoute  from './utils/PrivateRoute';
import AdminRoute from './utils/AdminRoute';
import AdaugaMarcaAuto from './pages/adminPages/adaugaMarcaAuto';
import AdaugaModelAuto from './pages/adminPages/adaugaModelAuto';
import AdaugaSubtipPiesa from './pages/adminPages/adaugaSubtipPiesa';
import EditeazaSubtipPiesa from './pages/adminPages/editeazaSubtipPiesa';
import AdaugaTipPiesa from './pages/adminPages/adaugaTipPiesa';
import AlegePiesa from './pages/alegePiesa';
import AlegeDistribuitor from './pages/alegeDistribuitor';
import AlegeMarca from './pages/alegeMarca';
import AdaugaDistribuitor from './pages/adminPages/adaugaDistribuitor';
import AlegeProducatori from './pages/alegeProducatori';
import AlegePiesaByName from './pages/alegePiesaByName';
import Cart from './pages/cart';
import Orders from './pages/adminPages/orders';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= {ROUTES.HOME}><Home /></Route>
        <Route exact path = {ROUTES.ABOUT}><p>This is about us page</p></Route>
        <Route exact path = {ROUTES.contact}><Contact /></Route>
        <Route exact path = {ROUTES.despreNoi}><DespreNoi /></Route>
        <Route exact path = {ROUTES.termeniSiContitii}><TermeniSiConditii /></Route>
        <Route exact path = {ROUTES.politicaDeConfidentialitate}><PoliticaDeConfidentialitate /></Route>
        <Route exact path = {ROUTES.metodaDePlata}><MetodaDePlata /></Route>
        <Route exact path = {ROUTES.politicaDeRetur}><PoliticaDeRetur /></Route>
        <Route exact path = {ROUTES.garantiaProduselor}><GarantiaProduselor /></Route>
        <Route exact path = {ROUTES.REGISTER}><Register /></Route>
        <Route exact path = {ROUTES.alegePiesa}><AlegePiesa /></Route>
        <Route exact path = {ROUTES.alegeDistribuitor} component={AlegeDistribuitor} />
        <Route exact path = "/alege-piesa-by/:search" component={AlegePiesaByName} />
        <Route exact path = {ROUTES.alegeProducatori} component={AlegeProducatori}/>
        <Route exact path = {ROUTES.alegeMarca} component={AlegeMarca} />
        <Route exact path = {ROUTES.cart} component={Cart} />
        <PrivateRoute exact path={ROUTES.userDashboard} component={UserDashboard}/>
        <AdminRoute exact path={ROUTES.adminDashboard} component={AdminDashboard}/>
        <AdminRoute exact path={ROUTES.adaugaMarcaAuto} component={AdaugaMarcaAuto}/>
        <AdminRoute exact path={ROUTES.adaugaModelAuto} component={AdaugaModelAuto}/>
        <AdminRoute exact path={ROUTES.adaugaDistribuitor} component={AdaugaDistribuitor}/>
        <AdminRoute exact path={ROUTES.adaugaSubtipPiesa} component={AdaugaSubtipPiesa}/>
        <AdminRoute exact path={ROUTES.editeazaSubtipPiesa} component={EditeazaSubtipPiesa}/>
        <AdminRoute exact path={ROUTES.adaugaTipPiesa} component={AdaugaTipPiesa}/>
        <AdminRoute exact path={ROUTES.orders} component={Orders}/>
      </Switch>
    </Router>
  );
}

export default App;
