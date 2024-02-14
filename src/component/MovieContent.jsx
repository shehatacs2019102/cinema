import React from 'react'
import titleImg from '../image/transformer-title.png'
import './movieContent.css'
import { Button } from './Button'
export function MovieContent({movie}) {
    

    return ( 
        <>
            <div className={`content ${movie.active ? 'active' : undefined}`}>
                            <img src={movie.titleImg} alt="image1" className="movie-title" />
                            <h4>
                                <span>{movie.year}</span>
                                <span><i>{movie.ageLimit}</i></span>
                                <span>{movie.length}</span>
                                <span>{movie.category}</span>

                            </h4>
                            <p>
                                {movie.description}
                            </p>
                            <div className="button">

                            {/* <Button icon={<ion-icon name='bookmark-outline'></ion-icon>} name='book' color='#ff3700' bgColor='#ffffff'/> */}
                            <Button icon = {<ion-icon name = "bookmark-outline"></ion-icon>} name = "book" color = '#ff3700'  bgColor = '#ffFFFF' />
                            <Button icon = {<ion-icon name = "add-outline"></ion-icon>} name = "MY LIST"  />
                            </div>

                        
                        </div>
        </>
    )
}
