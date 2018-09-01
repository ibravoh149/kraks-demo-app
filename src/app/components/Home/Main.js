import React, { Component } from 'react';
import Slider from './Slider';
import LatestList from "./LatestList";
import RightBar from "./RightBar";


class Main extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            // indicators: true,
        });

        $('.carousel').carousel();
        setInterval(() => {
            $('.carousel').carousel('next');
        }, 4000);

        $('.tabs').tabs();
    }

    render() {
        return (
            <div className=''>
                <Slider/>
                <br />
                <div className='row'>
                    <div className='col s12 m7 l7 items'>
                        <LatestList/>
                    </div>

                    {/* right bar */}
                    <div className='col s12 m5 l5'>
                        <RightBar/>
                        {/* latest sports */}
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Main;