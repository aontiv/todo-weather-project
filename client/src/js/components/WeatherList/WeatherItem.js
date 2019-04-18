import React, { Component } from "react";

class WeatherItem extends Component {
    render() {
        return (
            <li>
                <div>
                    <img src={this.props.imageUrl} alt={this.props.altText} />
                    <span>{this.props.low + "\u00B0" + " F"} - {this.props.high + "\u00B0" + " F"}</span>
                </div>
                <span>{this.props.date}</span>
            </li>
        );
    }
}

export default WeatherItem;
