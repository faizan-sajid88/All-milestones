import React from 'react';
import { NavLink } from 'react-router-dom';

function Button(prop) {
    return (
        <button
            id={prop.id}
            style={{ backgroundColor: prop.color}
            
        }
        >
            <NavLink 
            to={prop.path}
            style={{color:'whitesmoke',textDecoration:"none"}}
            >

             {prop.name}

            </NavLink>
        </button>
    )
}
export default Button