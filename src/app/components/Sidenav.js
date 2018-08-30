import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                <li>
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" />
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </li>

                 <ul class="collapsible z-depth-0">
                    {/* types */}
                    <li className='active'>
                        <div className="collapsible-header" style={{ color: 'grey' }}><i class="material-icons">book</i>Types</div>
                        <div className='collapsible-body'>
                            <div className='collection'>
                            <ul></ul>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-images" style={{ color: 'blue', paddingRight: '10px' }}></i></span> Images
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-camera" style={{ color: '#000', paddingRight: '10px' }}></i></span> Gallery
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-history" style={{ color: 'yellow', paddingRight: '10px' }}></i></span> Story
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-list-ul" style={{ color: 'purple', paddingRight: '10px' }}></i></span> List
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'green', paddingRight: '10px' }}>timer_off</i></span> Quiz
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'magenta', paddingRight: '10px' }}>poll</i></span> Poll
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'indigo', paddingRight: '10px' }}>question_answer</i></span> QnA
                                </Link>

                            </div>
                        </div>

                    </li>
                    {/* category */}
                    <li>
                        <div class="collapsible-header" style={{ color: 'grey' }}><i class="material-icons">collections</i>Category</div>
                        <div class="collapsible-body">
                            <div className='collection'>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'silver', paddingRight: '10px' }}>insert_emoticon</i></span> Humour
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-football-ball" style={{ color: 'green', paddingRight: '10px' }}></i></span> Sports
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-utensils" style={{ color: 'grey', paddingRight: '10px' }}></i></span> Food
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-deviantart" style={{ color: 'purple', paddingRight: '10px' }}></i></span> Art
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-play-circle" style={{ color: 'red', paddingRight: '10px' }}></i></span>{'  '}Tv & Movies
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-music" style={{ color: 'powderblue', paddingRight: '10px' }}></i></span> Music
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-strikethrough" style={{ color: 'powdered-blue', paddingRight: '10px' }}></i></span> Style
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-dumbbell" style={{ color: 'magenta', paddingRight: '10px' }}></i></span> Fitness
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-rocket" style={{ color: 'pink', paddingRight: '10px' }}></i></span> Science & Tech
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-heartbeat" style={{ color: 'powderblue', paddingRight: '10px' }}></i></span> Beauty
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-autoprefixer" style={{ color: 'red', paddingRight: '10px' }}></i></span> Auto
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-male" style={{ color: '#000', paddingRight: '10px' }}></i></span> Comics
                                </Link>
                            </div>

                        </div>
                    </li>
                    {/* reactions */}
                    <li>
                        <div class="collapsible-header" style={{ color: 'grey' }}><i class="material-icons">sentiment_very_satisfied</i>Reactions</div>
                        <div class="collapsible-body">
                            <div className='collection'>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/awesome.gif.pagespeed.ce.xmZErdGj7y.gif' style={{ height: '18px', width: '18px' }} /> Awesome
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/loved.gif.pagespeed.ce.Ye8s1bNGej.gif' style={{ height: '18px', width: '18px' }} /> Love
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/funny.gif.pagespeed.ce.Q_9IP9pYbg.gif' style={{ height: '18px', width: '18px' }} /> Funny
                                </Link>


                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/wow.gif.pagespeed.ce.jJ8D8gzsYh.gif' style={{ height: '18px', width: '18px' }} /> Shocked
                                </Link>


                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/fail.gif.pagespeed.ce.hbWgJ6sSTB.gif' style={{ height: '18px', width: '18px' }} /> Fail
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/wow.gif.pagespeed.ce.jJ8D8gzsYh.gif' style={{ height: '18px', width: '18px' }} /> Angry
                                </Link>


                            </div>

                        </div>
                    </li>
                </ul>
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
                <li>
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" />
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </li>

                {/* <li><div className="divider"></div></li> */}
                <ul class="collapsible z-depth-0">
                    {/* types */}
                    <li className='active'>
                        <div className="collapsible-header" style={{ color: 'grey' }}><i class="material-icons">book</i>Types</div>
                        <div className='collapsible-body'>
                            <div className='collection'>
                            <ul></ul>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-images" style={{ color: 'blue', paddingRight: '10px' }}></i></span> Images
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-camera" style={{ color: '#000', paddingRight: '10px' }}></i></span> Gallery
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-history" style={{ color: 'yellow', paddingRight: '10px' }}></i></span> Story
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-list-ul" style={{ color: 'purple', paddingRight: '10px' }}></i></span> List
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'green', paddingRight: '10px' }}>timer_off</i></span> Quiz
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'magenta', paddingRight: '10px' }}>poll</i></span> Poll
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'indigo', paddingRight: '10px' }}>question_answer</i></span> QnA
                                </Link>

                            </div>
                        </div>

                    </li>
                    {/* category */}
                    <li>
                        <div class="collapsible-header" style={{ color: 'grey' }}><i class="material-icons">collections</i>Category</div>
                        <div class="collapsible-body">
                            <div className='collection'>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="material-icons" style={{ color: 'silver', paddingRight: '10px' }}>insert_emoticon</i></span> Humour
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-football-ball" style={{ color: 'green', paddingRight: '10px' }}></i></span> Sports
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-utensils" style={{ color: 'grey', paddingRight: '10px' }}></i></span> Food
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-deviantart" style={{ color: 'purple', paddingRight: '10px' }}></i></span> Art
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-play-circle" style={{ color: 'red', paddingRight: '10px' }}></i></span>{'  '}Tv & Movies
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-music" style={{ color: 'powderblue', paddingRight: '10px' }}></i></span> Music
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-strikethrough" style={{ color: 'powdered-blue', paddingRight: '10px' }}></i></span> Style
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-dumbbell" style={{ color: 'magenta', paddingRight: '10px' }}></i></span> Fitness
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-rocket" style={{ color: 'pink', paddingRight: '10px' }}></i></span> Science & Tech
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-heartbeat" style={{ color: 'powderblue', paddingRight: '10px' }}></i></span> Beauty
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-autoprefixer" style={{ color: 'red', paddingRight: '10px' }}></i></span> Auto
                                </Link>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <span><i className="fas fa-male" style={{ color: '#000', paddingRight: '10px' }}></i></span> Comics
                                </Link>
                            </div>

                        </div>
                    </li>
                    {/* reactions */}
                    <li>
                        <div class="collapsible-header" style={{ color: 'grey' }}><i class="material-icons">sentiment_very_satisfied</i>Reactions</div>
                        <div class="collapsible-body">
                            <div className='collection'>
                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/awesome.gif.pagespeed.ce.xmZErdGj7y.gif' style={{ height: '18px', width: '18px' }} /> Awesome
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/loved.gif.pagespeed.ce.Ye8s1bNGej.gif' style={{ height: '18px', width: '18px' }} /> Love
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/funny.gif.pagespeed.ce.Q_9IP9pYbg.gif' style={{ height: '18px', width: '18px' }} /> Funny
                                </Link>


                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/wow.gif.pagespeed.ce.jJ8D8gzsYh.gif' style={{ height: '18px', width: '18px' }} /> Shocked
                                </Link>


                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/fail.gif.pagespeed.ce.hbWgJ6sSTB.gif' style={{ height: '18px', width: '18px' }} /> Fail
                                </Link>

                                <Link to={``} className='collection-item' style={{ color: '#000' }}>
                                    <img src='https://kraks.co/assets/img/reactions/wow.gif.pagespeed.ce.jJ8D8gzsYh.gif' style={{ height: '18px', width: '18px' }} /> Angry
                                </Link>


                            </div>

                        </div>
                    </li>
                </ul>
            </ul>

        </div>
    );
}

export default Sidenav;