import React, { Component } from "react";

class Todo extends Component {
    handleDeleteClick = () => {
        this.props.deleteTodo(this.props.todoId);
    };

    handleTodoClick = e => {
        e.preventDefault();
        this.props.updateTodo(this.props.todoId);
    };

    render() {
        return (
            <li className="list-group-item shadow-sm mb-4">
                <div className="d-flex justify-content-between mb-2">
                    <span>{this.props.timestamp}</span>
                    <button className="close" type="button" onClick={this.handleDeleteClick}>
                        <span>&times;</span>
                    </button>
                </div>
                <a href="" className="list-group-item-action">
                    <p className="primary-light-bgcolor text-white rounded p-3 m-0" onClick={this.handleTodoClick}>
                        {
                            !this.props.complete
                                ? this.props.text
                                : <s>{this.props.text}</s>
                        }
                    </p>
                </a>
            </li>
        );
    }
}

export default Todo;
