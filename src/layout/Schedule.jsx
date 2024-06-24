import React, { useState, useEffect } from 'react'
import './schedule.css';
import { Card } from '../component/Card';
export function Schedule(props) {
    const [data,setData] = useState([])
    const [movies,setMovies] = useState([])
    const fetchData = ()=>{
        fetch('https://shehatacs2019102.github.io/cinema/data/movieData.json')
        .then(res=>res.json())
        .then(data => setData(data)).catch(e => console.log(e.message));
    }
    useEffect( ()=>{
        fetchData();
    },[])

    useEffect(
        ()=>{setMovies(data)}
        );
    return (
        <section id="schedule" className="schedule">

            <div className="container-fluid">

                <div className="row">

                    <h4 className="section-title">
                        Opening this week
                    </h4>

                </div>

                <div className="filter">

                    <p>Fliters</p>


                </div>
                <div className="row mt-5 ">

                    {movies && movies.length >0 && movies.map(movie=>(  



                    <Card key={movie.id} movie={movie}/> )
                    
                    
                     )
                    
                    }

                </div>

            </div>


        </section>
    )
}
