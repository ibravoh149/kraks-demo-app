import React, { Component } from 'react';

const Sidenav = (props) => {
    // render(){
    return (
        <div>
            {/* sidenav for small screen */}
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span className="white-text name"></span></a>
                        <a href="#email"><span className="white-text email"></span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>

            {/* sidenav */}
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                        </div>
                        <a href="#user"><img className="circle" src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" /></a>
                        <a href="#name"><span className="white-text name"></span></a>
                        <a href="#email"><span className="white-text email"></span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div className="divider"></div></li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            {/* <ul className="right hide-on-med-and-down">
                <li><a href="#!">First Sidebar Link</a></li>
                <li><a href="#!">Second Sidebar Link</a></li>
                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                </ul>
            </ul> */}
        </div>
    );
    // }
}

export default Sidenav;