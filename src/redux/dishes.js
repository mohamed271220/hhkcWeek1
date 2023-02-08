import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';


export const Dishes = (state = {
    isLoading: true,
    errMsg: null,
    dishes: []

}, action) => {

    switch (action.type) {
        case ActionTypes.DISHES_ADD:
        return { ...state, isLoading:false, errMsg: null, dishes:action.payload}

        case ActionTypes.DISHES_LOADING:
            //takes state then modify it and return
            return { ...state, isLoading:true, errMsg: null, dishes:[]}
        case ActionTypes.DISHES_FAILED:
        return { ...state, isLoading:true, errMsg: action.payload, dishes:[]}

        default:
            return state;

    }

}