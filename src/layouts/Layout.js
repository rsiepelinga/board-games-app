import React from 'react';
import NavBar from '../components/navigation/NavBar.js';

const Layout = ({component: Component}) => {
  
  return (
    <div>
      <NavBar/>
      <div style={{padding: "80px 20px 0px"}}>
        <Component/>
      </div>
    </div>
  )
}

export default Layout;