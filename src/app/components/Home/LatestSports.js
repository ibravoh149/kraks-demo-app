import React, { Component } from 'react';
import { data } from "../../helper/mockData";


class LatestSports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: []
        }
        this.populate = this.populate.bind(this);
    }

    componentDidMount() {
        this.setState({
            sport: data.splice(0, 3)
        })

    }
    populate() {
        if (this.state.sport && this.state.sport.length > 0) {
            return this.state.sport.map((item, index) => {
                return <div key={index}>
                    <div className="col s12 m12">
                        <div className="card z-depth-0">
                            <div className="card-image">
                                <img src="https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png" />
                                <span className="card-title valign-wrapper">{item.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{item.desc} <a href='#'><i class="fas fa-info-circle"></i></a></p>
                            </div>
                            <div className="card-action">
                                <span style={{ fontSize: '10px', color: 'grey' }}>{item.createdBy}</span>
                                <br />
                                <a href='' style={{ color: 'grey' }}><i className="fab fa-facebook-f"></i>{' '}{item.fb}</a>
                                <a href='' style={{ color: 'grey' }}><i className="fab fa-twitter"></i>{' '}{item.twitter}</a>
                                <a href='' style={{ color: 'grey' }}><i className="fab fa-whatsapp"></i>{' '}{item.whatsapp}</a>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            })
        }
    }


    render() {
        return (
            <div>
                <div className='white col-header valign-wrapper'>
                    <img src='https://cdn.kraks.co/upload/media/image/2018/05/1844/1527674347_logo.png' style={{ height: '80px', width: '80px' }} />
                    <h6 className='underline'><span><i className="fas fa-football-ball" style={{ color: 'green' }}></i></span> Latest Sports</h6>
                </div>
                <div id="" className="row">
                    {this.populate()}
    
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

            </div>
        );
    }
}

export default LatestSports;