import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand
  } from 'reactstrap';







class AppNavbar  extends Component {
    render() { 
        return ( 
            <div  >
                <Navbar  style={{backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }} expand='md'>
                    <NavbarBrand style={{color: 'white', textAlign: "center"}}><h1>Food Planner</h1></NavbarBrand>
                </Navbar>
            </div>
         );
    }
}
 
export default AppNavbar ;