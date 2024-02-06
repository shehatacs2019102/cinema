import React from 'react';
import './button.css';
export function Button({icon, name, bgColor = '#ff3700', Color='#ffffff'}) {
    

    return (
        <>
            <a href="#" className='mainBtn' style={{color:Color, background:bgColor}}>

                {icon} {name}
               
            </a>
        </>
    );
}


