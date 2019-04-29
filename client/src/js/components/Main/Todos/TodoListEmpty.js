import React, { Component } from "react";

class TodoListEmpty extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <span>- No Todos -</span>
            </div>
        );
    }
}

export default TodoListEmpty;
