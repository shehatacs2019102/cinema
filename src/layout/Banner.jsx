import React, {useEffect,useState} from 'react';
import "./banner.css";
import bgImg from "../image/bg-transformer.jpg";
import { MovieContent } from '../component/MovieContent';
import { MovieDate } from '../component/MovieDate';
import { PlayBtn } from '../component/PlayBtn';
import { Button } from '../component/Button';
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
    
    return (
        <div className="banner">
            <div className="movie"></div>
            <img src={bgImg} alt="Background Image" className="bgImg active" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">

                        <MovieContent/>
                        
                    </div>


                    <div className="col-lg-6 col-md-12">
                        
                        <MovieDate/>

                        <PlayBtn/>
                        <Button icon = {<ion-icon name="bookmark-outline"></ion-icon>} name = 'book' Color = '#000000' bgColor ='#575600' />
                    </div>
                    
                </div>

                
            </div>

        </div>
    );
}

export default Banner;