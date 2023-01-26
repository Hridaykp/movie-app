import React from "react";
import {data} from  '../data';
import { connect } from "react-redux";
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from '../actions';
class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(addMovies(data))
        // console.log('STATE', this.props.getState());
    }

    isMovieFavourite =(movie)=> {
        const { movies }  = this.props;
        const index = movies.favourites.indexOf(movie);
        if(index !== -1){
            return true; //found movie
        }
        else{
            return false;
        }
    }
    onChangeTab = (flag) =>{
        this.props.dispatch(setShowFavourites(flag))
    }
    render(){
        const { movies, search } = this.props; 
        const {list, favourites, showFavourites} = movies;
        // console.log('RENDER', this.props.store.getState());
        const displayMovies = showFavourites ? favourites: list;
        return (
            <div className="App">
                <Navbar search={search}/>
                <div className="main">
                    <div className="tabs">
                        <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>
                            Movies
                        </div>
                        <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>
                            Favourites
                        </div>
                    </div>
                    <div className="list">
                        {displayMovies.map((movie, index)=>{
                            return (
                                <MovieCard 
                                    movie={movie} 
                                    key={`movies-${index}`} 
                                    dispatch={this.props.dispatch}
                                    isFavourite = {this.isMovieFavourite(movie)}
                                />
                            )
                        })}
                    </div>
                    {displayMovies.length === 0 ? <div className="no-movies"><h3>No Movies to display !!</h3></div>:null}
                </div>
            </div>
        );
    }
    
}


// class AppWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {(store) => <App store={store}/>}
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToProps(state){
    return{
        movies: state.movies,
        search: state.search
    }
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
