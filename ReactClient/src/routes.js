import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import cookie from 'react-cookies';
import _ from 'lodash'; 

function checkIsLogin(nextState,replace){ 
  if(nextState.location.pathname == '/'){
    if(!_.isUndefined(cookie.load('access_token'))){
      replace({
        pathname: '/home',
        state: { nextPathName : nextState.location.pathname},
        query: ''
      });
    }
  }else{
    if(!_.isUndefined(cookie.load('access_token'))){
      return true;
    }else{
      replace({
        pathname: '/',
        state: { nextPathName : nextState.location.pathname},
        query: ''
      });
    }
  }
}

export default (
  <Route path="/" component={App} onEnter={checkIsLogin}>
    <Route path="/home" component={HomePage} onEnter={checkIsLogin}/>
    <IndexRoute component={LoginPage}/>
  </Route>
);
