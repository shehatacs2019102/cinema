import React, {useEffect,useState} from 'react';
import "./banner.css";
import bgImg from "../image/bg-transformer.jpg";
import { MovieContent } from '../component/MovieContent';
import { MovieDate } from '../component/MovieDate';
import { PlayBtn } from '../component/PlayBtn';
import { Button } from '../component/Button';
import { MovieSwiper } from '../component/MovieSwiper';
function Banner(props) {
    const [movies,setMovies]= useState([]);
    const fetchData = ()=>{
        fetch('http://localhost:5173/data/movieData.json')
        .then(res=>res.json())
        .then(data => setMovies(data)).catch(e => console.log(e.message));
    }
    useEffect( ()=>{
        fetchData();
    },[])
    const handleSlideCHange = id => {
        const NewMovies = movies.map(movie =>{
            movie.active = false ;
            if(movie._id === id){
                movie.active = true;

            }
            return movie;
        });
        setMovies(NewMovies);
    }
    return (
        <div className="banner">
            {
                movies && movies.length>0 && movies.map(movie => (

                    <div className="movie">
            <img src={movie.bgImg} alt="Background Image" className={`bgImg ${movie.active ? 'active' : undefined}`} />            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">

                        <MovieContent movie = {movie}/>
                        
                    </div>


                    <div className="col-lg-6 col-md-12">
                        
                        <MovieDate movie = {movie} />

                        <PlayBtn movie = {movie} />
                        
                    </div>
                    
                </div>

                
            </div>
            </div>
                ))
            }
            
            
            
            {movies && movies.length > 0 && <MovieSwiper slides = {movies} slideChange = {handleSlideCHange}/> }
            

        </div>
    );
}

export default Banner;