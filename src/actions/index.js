

    
// }

// action types var
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';


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