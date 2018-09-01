import React, { Component } from 'react';
import HotList from './HotList';
import TrendingList from './TrendingList';
import FreshList from './FreshList';

class LatestList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
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
                           <HotList/>
                        
                        </div>
                        {/* swipe-one */}
                        {/* swipe-two */}
                        <div id="test-swipe-2" className="row">
                           <TrendingList/>
                        </div>
                        {/* swipe-two */}
                        {/* swipe-three */}
                        <div id="test-swipe-3" className="row">
                            <FreshList/>
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
        );
    }
}

export default LatestList;