import React, { Component } from "react";

import TodoList from "./TodoList";
import TodoListEmpty from "./TodoListEmpty";

class TodoSwitcher extends Component {
    render() {
        const isEmpty = this.props.isEmpty;

        if (isEmpty) {
            return (
                <TodoListEmpty />
            );
        }
        else {
            return (
                <TodoList
                    todos={this.props.todos}
                    deleteTodo={this.props.deleteTodo}
                    toggleTodoComplete={this.props.toggleTodoComplete}
                />
            );
        }
    }
}

export default TodoSwitcher;
