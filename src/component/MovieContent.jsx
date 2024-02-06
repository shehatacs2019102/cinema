import React from 'react'
import titleImg from '../image/transformer-title.png'
import './movieContent.css'
import { Button } from './Button'
export function MovieContent(props) {
    

    return ( 
        <>
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
                            <div className="button">

                            {/* <Button icon={<ion-icon name='bookmark-outline'></ion-icon>} name='book' color='#ff3700' bgColor='#ffffff'/> */}

                            </div>

                        
                        </div>
        </>
    )
}
