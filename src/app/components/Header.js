import React, { Component } from 'react';

const Header=(props)=>{
    // render(){
        return(
            <div>
                 <header>
                    <nav>
                        <div className="nav-wrapper header">
                            <a href="#!" className="brand-logo">KRAKSTV</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className ='btn btn-small indigo'href="#"><i className="material-icons left">add</i>Create</a></li>
                                <li><a href="collapsible.html">Sign in</a></li>
                                <li><a className ='btn btn-small purple'href="#">Sign up</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    // }
}

export default Header;