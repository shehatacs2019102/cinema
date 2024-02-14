import React from 'react'
import './modal.css'

export function Modal({movie, toggleModal, status}) {
    

    return (
        <div className={`movieModal ${status ? 'active ' : undefined}`}>

            <a href="#" className='modalClose' onClick={toggleModal}>  

            <ion-icon name='close-outline' ></ion-icon>

            </a>
            
            <iframe width =  "1280" height="720" src={movie.video}
            title={`${movie.title} |official trailer` }frameBorder="0"
            
            allow="accelerometer; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; webshare"
            allowFullScreen ></iframe>

            

        </div>
    )
}
