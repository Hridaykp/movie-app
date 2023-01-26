
// action types var
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


//action creators 
export  const  addMovies =(movies)=>{
    return({
        type: ADD_MOVIES,
        movies
    });
}

export  const  addFavourite =(movie)=>{
    return({
        type: ADD_TO_FAVOURITES,
        movie
    });
}

export  const  removeFavourites =(movie)=>{
    return({
        type: REMOVE_FROM_FAVOURITES,
        movie
    });
}

export  const  setShowFavourites =(flag)=>{
    return({
        type: SET_SHOW_FAVOURITES,
        flag
    });
}

export const addMovieToList =(movie)=>{
    return({
        type: ADD_MOVIE_TO_LIST,
        movie
    });
}

export const handleMovieSearch =(searchText) =>{
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    return function (dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);
            // dispatch an action
            dispatch(addMovieSearchResult(movie))
        })
    }
}

export const addMovieSearchResult =(movie)=>{
    return {
        type: ADD_SEARCH_RESULT, 
        movie
    }
}