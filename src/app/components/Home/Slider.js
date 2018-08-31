import React, { Component } from 'react';
import img1 from '../../../public/images/img3.jpeg';
import img2 from '../../../public/images/park.jpeg';

const Slider = (props) => {
    // render(){
    return (
        <div className="bannerWrapper">
            <div className="carouselContainer">
                <div
                    className="carousel carousel-slider center"
                    data-indicators="true"
                >
                    <a className="carousel-item red white-text" href="#one!">
                        <div >
                            <img className="carouselImage" src='https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png' alt="" />
                            {/* <img className="carouselImage" src={img1} alt="" /> */}
                        </div>

                        <div className="carouselContent">
                            <h2 className="carouselHeader">
                            You Know She's A Keeper When She Does These TEN Things
                              </h2>
                            {/* <p className="carouselparagraph">
                            Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas
                            
                              </p> */}
                              <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>

                        </div>
                    </a>


                    <a className="carousel-item red white-text" href="#one!">
                        <div className="carouselContainer">
                            <img className="carouselImage" src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" alt="" />
                            {/* <img className="carouselImage" src={img2} alt="" /> */}
                        </div>
                        <div className="carouselContent">
                            <h2 className="carouselHeader">
                                 You Know She's A Keeper When She Does These TEN Things
                            </h2>
                            {/* <p className="carouselparagraph">
                            Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas
                            
                            </p> */}
                            <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>

                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
    // }
}

export default Slider;