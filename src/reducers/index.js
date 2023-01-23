import { ADD_MOVIES } from '../actions';


// state could be anything like string, object, array..
const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies(state = initialMoviesState, action){
    if(action.type === ADD_MOVIES){
        return ({
            ...state,
            list: action.movies
        });
    }
    return state;
}

