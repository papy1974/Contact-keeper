import React from 'react';

import Prototypes from 'prop-types';

const Navbar = ({title, icon}) => {
  return (
    <div className='navbar bg-primary'>
        <h1>
            <i className={icon} /> {title}
        </h1>
      
    </div>
  )
}

Navbar.prototypes = {
    title:Prototypes.string.isRequired,
    icon: Prototypes.string,
}

Navbar.defaultProps = {
    title:'Contact keeper',
    icon:'fas fa-id-card-alt'
}


export default Navbar
