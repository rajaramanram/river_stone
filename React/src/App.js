import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminManagement from './components/AdminManagemet';
import EmailFeature from './components/EmailFeature';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
//import unctionForm from './components/productForm2';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/" component={UserLogin}/>
      
      <Route exact path="/user_register" component={UserRegister}/>
      <Route exact path="/admin" component={AdminManagement}/>
      <Route exact path="/email" component={EmailFeature}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
