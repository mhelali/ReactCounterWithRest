import axios from 'axios';
import cookies from 'react-cookies';
import _ from 'lodash';

class HomeApi {
  
  static getCurrentCount() {
    return new Promise((resolve, reject) => {
    let configHeader = HomeApi.getConfigHeaders();    
    axios.get('http://localhost:4206/api/currentCount?ts='+Date.now(),configHeader)
      .then(function(response){
        resolve(response.data);
      });
    });
  }

  static getNextCount() {
    return new Promise((resolve, reject) => {
    let configHeader = HomeApi.getConfigHeaders();
    axios.get('http://localhost:4206/api/nextCount?ts='+Date.now(),configHeader)
      .then(function(response){
        resolve(response.data);
      });
    });
  }

  static updateToNextCount() {
    return new Promise((resolve, reject) => {
    let configHeader = HomeApi.getConfigHeaders();    
    axios.put('http://localhost:4206/api/upadateToNextCount?ts='+Date.now(),{},configHeader)
      .then(function(response){
        resolve(response.data);
      });
    });
  }

  static  getConfigHeaders(){
    let configHeader = {};
    if(!_.isUndefined(cookies.load('access_token', {path: '/'}))){
      let loginUser = JSON.parse(cookies.load('access_token', {path: '/'}));
       configHeader = {
        headers: {
          'Content-Type': 'application/json',
          'AuthorizationKey': loginUser.username,
          'AuthorizationValue': loginUser.password
          }
      };
    }
    return configHeader;
  }

}

export default HomeApi;
