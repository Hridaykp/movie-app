import React from "react";
import {data} from  '../data';
import Navbar from './Navbar';
import MovieCard from "./MovieCard";
import {addMovies} from '../actions';

class App extends React.Component {
    componentDidMount(){
        const {store} = this.props;
        store.subscribe(()=>{
            console.log('UPDATED');
            this.forceUpdate();
        })
        // make api call
        //dispatch actions
        store.dispatch(addMovies(data))
        console.log('STATE', this.props.store.getState());
    }
    render(){
        const movies = this.props.store.getState();
        console.log('RENDER');
        return (
            <div className="App">
                <Navbar/>
                <div className="main">
                    <div className="tabs">
                        <div className="tab">
                            Movies
                        </div>
                        <div className="tab">
                            Favourites
                        </div>
                    </div>
                    <div className="list">
                        {movies.map((movie, index)=>{
                            return (
                                <MovieCard key={`movies-${index}`} movie={movie}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;
