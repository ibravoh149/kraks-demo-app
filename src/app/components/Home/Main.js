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
                {/* banner */}
                <Slider/>
                {/* <div className='col s12 top-section'>
                    <div className='row'>
                        <div className='col s12 m6'> */}
                            {/* <div className="col s12 m12"> */}
                            {/* <div className="card z-depth-0">
                                <div className="card-image CI">
                                    <h6>tired of lauging</h6>
                                    <div className='CI-layer'> */}
                                        {/* <img src="https://lorempixel.com/250/250/nature/2" style={{ height: '250px' }} /> */}
                                    {/* </div>
                                </div>
                            </div> */}

                            {/* </div> */}
                        {/* </div>
                    </div>
                </div> */}
                {/* banner */}

                <br />
                <div className='row'>
                    <div className='col s12 m7 l7 items'>
                        <div className='white col-header valign-wrapper'>
                            <img src='https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png' style={{ height: '80px', width: '80px' }} />
                            <h6 className='underline'><span><i className="fas fa-list-ul" style={{ color: '#feae4a' }}></i></span> Latest Lists</h6>
                        </div>
                        <div className="divider"></div>
                        <ul id="tabs-swipe-demo" className="tabs">
                            <li className="tab col s3"><a className="active" href="#test-swipe-1"><i className='material-icons'>whatshot</i>Hot</a></li>
                            <li className="tab col s3"><a href="#test-swipe-2"><i className='material-icons'>trending_up</i>Trending</a></li>
                            <li className="tab col s3"><a href="#test-swipe-3"><i className='material-icons'>update</i>Fresh</a></li>
                        </ul>
                        <div className="divider"></div>
                        <div className='white buttons'>
                            <a className="waves-effect waves-teal btn-flat btn-small flat active">Today</a>
                            <a className="waves-effect waves-teal btn-flat btn-small">This Week</a>
                            <a className="waves-effect waves-teal btn-flat btn-small">This Month</a>
                            <a className="waves-effect waves-teal btn-flat btn-small">This Quarter</a>
                            <a className="waves-effect waves-teal btn-flat btn-small">All Time</a>
                        </div>
                        {/* swipe-one */}
                        <div id="test-swipe-1" className="row">
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                        <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
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
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                   </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
                                       <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
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
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                   </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
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
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                   </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
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
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                   </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
                                      <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider"></div>
                        </div>
                        {/* swipe-three */}

                        {/* pagination */}
                        <ul className="pagination center">
                            <li className="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li className="active" style={{ backgroundColor: '#feae4a' }}><a href="#!">1</a></li>
                            <li className="waves-effect"><a href="#!">2</a></li>
                            <li className="waves-effect"><a href="#!">3</a></li>
                            <li className="waves-effect"><a href="#!">4</a></li>
                            <li className="waves-effect"><a href="#!">5</a></li>
                            <li className="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                        </ul>
                        {/* pagination */}
                    </div>

                    {/* right nav */}
                    <div className='col s12 m5 l5'>
                        <div className='white col-header valign-wrapper'>
                            <img src='https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png' style={{ height: '80px', width: '80px' }} />
                            <h6 className='underline'><span><i className="fas fa-history" style={{ color: 'indigo' }}></i></span> Latest Story</h6>
                        </div>
                        <div id="" className="row">
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
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
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                    </div>
                                    <div className="card-action">
                                     <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                     <br/>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            {/* pagination */}
                            <ul className="pagination center">
                                <li className="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                <li className="active" style={{ backgroundColor: '#feae4a' }}><a href="#!">1</a></li>
                                <li className="waves-effect"><a href="#!">2</a></li>
                                <li className="waves-effect"><a href="#!">3</a></li>
                                <li className="waves-effect"><a href="#!">4</a></li>
                                <li className="waves-effect"><a href="#!">5</a></li>
                                <li className="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                            </ul>
                            {/* pagination */}
                        </div>

                        {/* latest sports */}
                        <div className='white col-header valign-wrapper'>
                            <img src='https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png' style={{ height: '80px', width: '80px' }} />
                            <h6 className='underline'><span><i className="fas fa-football-ball" style={{ color: 'green' }}></i></span> Latest Sports</h6>
                        </div>
                        <div id="" className="row">
                            <div className="col s12 m12">
                                <div className="card z-depth-0">
                                    <div className="card-image">
                                        <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                   </div>
                                    <div className="card-action">
                                    <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                    <br/>
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
                                        <span className="card-title valign-wrapper"> Where does it come from?</span>
                                        
                                    </div>
                                    <div className="card-content">
                                    <p>Contrary to popular belief, Lorem Ipsu
                            m is not simply random text. It has roots in a piece of clas... <a href='#'><i class="fas fa-info-circle"></i></a></p>
                                   </div>
                                    <div className="card-action">
                                     <span style={{fontSize:'10px',color:'grey'}}>kraksTv 1 day ago</span>
                                        <br/>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{'5'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{'2'}</a>
                                        <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{'0'}</a>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            {/* pagination */}
                            <ul className="pagination center">
                                <li className="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                <li className="active" style={{ backgroundColor: '#feae4a' }}><a href="#!">1</a></li>
                                <li className="waves-effect"><a href="#!">2</a></li>
                                <li className="waves-effect"><a href="#!">3</a></li>
                                <li className="waves-effect"><a href="#!">4</a></li>
                                <li className="waves-effect"><a href="#!">5</a></li>
                                <li className="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                            </ul>
                            {/* pagination */}
                        </div>
                        {/* latest sports */}
                    </div>
                    {/* nav right */}
                </div>
            </div>
        )
    }
}

export default Main;