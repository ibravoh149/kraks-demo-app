import React, { Component } from 'react';
import Header from '../Header';
import Sidenav from "../Sidenav";
import Main from './Main';


class HomePage extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        $('.sidenav').sidenav();
        $('.dropdown-trigger').dropdown();
        $('.collapsible').collapsible();
        
    }

    render() {
        return (
            <div>
               <Header/>
                <Sidenav/>
                <div className='main' style={{marginTop:'1px'}}>
                   <Main/>
                </div>
                <div>
                {/* <Footer/> */}
                </div>
            </div>
        )
    }
}

export default HomePage;