import React, {useEffect,useState} from 'react';
import "./banner.css";
import bgImg from "../image/bg-transformer.jpg";
import titleImg from '../image/transformer-title.png'
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
                        <div className="content active">
                            <img src={titleImg} alt="image1" className="movie-title" />
                            <h4>
                                <span>year</span>
                                <span><i>age</i></span>
                                <span>length</span>
                                <span>category</span>

                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                               Similique repudiandae minus iusto obcaecati! Et, possimus
                               voluptatem ipsum corrupti non, deserunt aliquam hic quo 
                               sint quidem tempora laboriosam distinctio, praesentium ut.
                            </p>
                            <div className="button">Button</div>

                        
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-12">
                        <div className="date active">
                            <h2>On 15th August</h2>  
                        </div>
                        <div className="trailer d-flex align-items-center justify-content-center active">
                            <a href="#" className="playBtn">
                            <ion-icon name="play-outline"></ion-icon>
                            </a>
                            <p>Watch Trailer</p>
                        </div>
                    </div>
                    
                </div>

                
            </div>

        </div>
    );
}

export default Banner;