import React from 'react';
import PropTypes from 'prop-types';
import './navListItem.css'


function NavListItem({nav}) {
    return (
        <li>
            <a href='#'>{nav.name}</a>
        </li>
    );
}

export default NavListItem;