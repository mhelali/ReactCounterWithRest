import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function home(state = initialState.counterData, action) {    
  switch (action.type) {
    case types.GET_CURRENT_COUNT_SUCCESS:
        return {currentCount: action.currentCount, nextCount: 0};
    case types.GET_NEXT_COUNT_SUCCESS:   
        return {currentCount: state.currentCount, nextCount: action.nextCount};            
    case types.UPDATE_CURRENT_COUNT_SUCCESS:        
        return {currentCount: action.currentCount, nextCount: 0};
    default:
      return state;
  }
}