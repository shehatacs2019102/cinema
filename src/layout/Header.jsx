import React from 'react';
import PropTypes from 'prop-types';
import './header.css'
import NavListItem from '../component/navlistitem';
import NavListData from '../data/NavListData';
import Search from '../component/Search';


function Header(props) {
    return (
        <header>
            <a href="" className="logo">Cinema</a>
            <ul className="nav">

              {
                NavListData.map(nav=>(
                    <NavListItem key={nav._id} nav={nav} />
                ))

              }  
            
            </ul>
           <Search/>
        </header>
    );
}

export default Header;