// state could be anything like string, object, array..
export default function movies(state=[], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}