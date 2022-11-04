import React from 'react';
import NavBar from '../components/navigation/NavBar.js';

const Layout = ({component: Component}) => {
  
  return (
    <div>
      <NavBar/>
      <Component/>
    </div>
  )
}

export default Layout;