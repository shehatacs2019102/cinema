import React from 'react';
import './button.css';
export function Button({name, icon, color , bgColor}) {
    

    return (
        <div>
        <a href="#" className='mainBtn' style ={{color :color, background:bgColor}}>

       {icon} {name}
      
        </a>
   </div>
            
        
    ); 
}


