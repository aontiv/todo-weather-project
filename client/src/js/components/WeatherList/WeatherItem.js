import React, { Component } from "react";

class WeatherItem extends Component {
    render() {
        return (
            <li className="list-group-item border-0 p-2">
                <div className="card shadow-sm align-items-center border-0" style={{ width: "9.6875rem", height: "13.5625rem" }}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-2">
                        <img className="mb-4" style={{ maxWidth: "4.6875rem" }} src={this.props.imageUrl} alt={this.props.altText} />
                        <span className="text-muted">{this.props.low + "\u00B0" + " F"} - {this.props.high + "\u00B0" + " F"}</span>
                        <span className="text-muted">{this.props.date}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default WeatherItem;
