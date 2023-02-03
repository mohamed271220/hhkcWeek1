import {createStore , combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comment';
import { Promotions } from './promotions';
import { Leaders } from './leaders';




export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, // reducer
        // initialState, // our initialState
        //fusion summon 
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        })
    );

    return store;
}