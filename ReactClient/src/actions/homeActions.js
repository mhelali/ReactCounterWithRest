import homeApi from '../api/homeApi';
import * as types from './actionTypes';

export function getCurrentCountSuccess(currentCount) {  
  return {type: types.GET_CURRENT_COUNT_SUCCESS, currentCount};
}

export function getNextCountSuccess(nextCount) {  
  return {type: types.GET_NEXT_COUNT_SUCCESS, nextCount};
}

export function updateCurrentCountSuccess(currentCount) {
  return function(dispatch, getState) {    
    dispatch({type: types.UPDATE_CURRENT_COUNT_SUCCESS, currentCount});
  };
}

export function updateToNextCount() {
  return function (dispatch) {
    return homeApi.updateToNextCount().then(response => {
      dispatch(updateCurrentCountSuccess(response.data.currentCount));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getNextCount() {
  return function (dispatch) {
    return homeApi.getNextCount().then(response => {
      dispatch(getNextCountSuccess(response.data.nextCount));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getCurrentCount() {
  return function (dispatch) {
    return homeApi.getCurrentCount().then(response => {
      dispatch(getCurrentCountSuccess(response.data.currentCount));
    }).catch(error => {
      throw(error);
    });
  };
}


