import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Transports from './components/Transports/Transports';
import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header2 from './components/Header2/Header2';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>

        <Route path="/home">
           <Header></Header>
           <Transports></Transports>
        </Route>
        <PrivateRoute path="/destination/:vehiclekey">
           <Header2></Header2>
           <Destination></Destination>
        </PrivateRoute>
           
        <Route path="/login">
           <Header></Header>
           <Login></Login>
        </Route>

        <Route exact path="/">
            <Header></Header>
            <Transports></Transports>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
        </Route>
    
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
