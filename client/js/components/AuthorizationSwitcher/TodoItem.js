import React, { Component } from "react";

import timesSolid from "../../../img/times-solid.png";

class TodoItem extends Component {
    render() {
        return (
            <li>
                <div>
                    <span>{this.props.timestamp}</span>
                    <span>EDIT</span>
                    <img src={timesSolid} alt="delete" />
                </div>
                <p>{this.props.text}</p>
            </li>
        );
    }
}

export default TodoItem;
