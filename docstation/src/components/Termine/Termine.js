import React, { Component } from 'react';

class Termine extends Component {
    render() {
        return (
        <div>   
            <div className="container">
                <h5 className="event-subtitle">{this.props.name}&nbsp;&nbsp;</h5>
                <p className="infos">{this.props.termin}</p>
                <hr/>
            </div>  
        </div>
        );
    }
}

export default Termine;