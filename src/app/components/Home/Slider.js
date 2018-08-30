import React, { Component } from 'react';

const Slider = (props) => {
    // render(){
    return (
        <div className="bannerWrapper">
            <div className="carouselContainer">
                <div
                    className="carousel carousel-slider center"
                    data-indicators="true"
                >
                    <div className="carousel-item red white-text" href="#one!">
                        <div >
                            {/* <img className="carouselImage" src='' alt="" /> */}
                            <img className="carouselImage" src='https://lorempixel.com/250/250/nature/2' alt="" />
                        </div>
                        <div className="carouselContent">
                            <h2 className="carouselHeader">
                                lorem Ipsum......
                              </h2>
                            <p className="carouselparagraph">
                                Share your biggest fun
                              </p>
                        </div>
                    </div>

                    <div className="carousel-item red white-text" href="#one!">
                        <div className="carouselContainer">
                            {/* <img className="carouselImage" src='' alt="" /> */}
                            <img className="carouselImage" src='https://lorempixel.com/250/250/nature/1' alt="" />
                        </div>
                        <div className="carouselContent">
                            <h2 className="carouselHeader">
                                some alot of text
                            </h2>
                            <p className="carouselparagraph">
                                something aint right here
                            </p>
                        </div>
                    </div>

                    <div className="carousel-item red white-text" href="#one!">
                        <div className="carouselContainer">
                            {/* <img className="carouselImage" src="" alt="" /> */}
                            <img className="carouselImage" src='https://lorempixel.com/250/250/nature/3' alt="" />
                        </div>
                        <div className="carouselContent">
                            <h2 className="carouselHeader">
                                alot of text
                            </h2>
                            <p className="carouselparagraph">
                                something aint right here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    // }
}

export default Slider;