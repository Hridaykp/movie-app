import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES,ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST} from '../actions';
import { combineReducers } from 'redux';

// state could be anything like string, object, array..
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export  function movies(state = initialMoviesState, action){
    console.log("MOVIES REDUCER");
   //use switch cases for actions
    switch(action.type){
        case ADD_MOVIES: 
            return ({
                ...state,
                list: action.movies
            });
        case ADD_TO_FAVOURITES:
            return ({
                ...state,
                favourites: [action.movie, ...state.favourites]
            });
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                (movie)=> movie.Title !== action.movie.Title
            )
            return ({
                ...state,
                favourites: filteredArray
            });
        case SET_SHOW_FAVOURITES:
            return ({
                ...state,
                showFavourites: action.flag
            })
        case ADD_MOVIE_TO_LIST:
            return ({
                ...state,
                list: [action.movie, ...state.list]
            })
        default: 
            return state;
    }
}
const initialSearchState = {
    result:{},
    showSearchResult: false,
};
export function search (state = initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result: action.movie,
                showSearchResult: true,
            }
        case ADD_MOVIE_TO_LIST:
            return ({
                ...state,
                showSearchResult: false
            })
        default: 
            return state;
    }
}
// const initialRootState ={
//     movies: initialMoviesState,
//     search: initialSearchState

// };
// export function rootReducer(state = initialRootState, action) {
//     return ({
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     })
// }

export default combineReducers({
    movies,
    search
})