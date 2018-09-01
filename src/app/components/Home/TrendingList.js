import React, { Component } from 'react';
import { data } from "../../helper/mockData";

class TrendingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {

        return (

            <div>

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
            </div>
        );
    }
}

export default TrendingList;