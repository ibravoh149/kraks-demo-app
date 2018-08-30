import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from './Slider';


class Main extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true,
        });

        $('.carousel').carousel();
        setInterval(() => {
            $('.carousel').carousel('next');
        }, 4000);

        $('.tabs').tabs();
    }

    render() {
        return (
            <div className='caro'>
                <Slider />
        
                <br /> 
                <div className='row'>
                    <div className='col s12 m7 l7 items'>
                        <div className='white col-header valign-wrapper'>
                        <img src='https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png' style={{height:'80px',width:'80px'}}/>
                            <h6 className='underline'><span><i className="fas fa-list-ul" style={{color:'#feae4a'}}></i></span> Latest Lists</h6>
                        </div>
                        <div className="divider"></div>
                        <ul id="tabs-swipe-demo" className="tabs">
                            <li className="tab col s3"><a className="active" href="#test-swipe-1"><i className='material-icons'>whatshot</i>Hot</a></li>
                            <li className="tab col s3"><a href="#test-swipe-2"><i className='material-icons'>trending_up</i>Trending</a></li>
                            <li className="tab col s3"><a href="#test-swipe-3"><i className='material-icons'>update</i>Fresh</a></li>
                        </ul>
                        <div className="divider"></div>
                       <div>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                            <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                        </div>
                        {/* swipe-one */}
                        <div id="test-swipe-1" className="row">
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper">Card Title</span>
                                    </div>
                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            {/* card 2 */}
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper">Card Title</span>
                                    </div>
                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">This is a link</a>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                        </div>
                        {/* swipe-one */}
                        {/* swipe-two */}
                        <div id="test-swipe-2" className="row">
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper">Card Title</span>
                                    </div>
                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </div>
                        {/* swipe-two */}
                        {/* swipe-three */}
                        <div id="test-swipe-3" className="row">
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper">Card Title</span>
                                    </div>
                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper">Card Title</span>
                                    </div>
                                    <div className="card-content">
                                        <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </div>
                        {/* swipe-three */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;