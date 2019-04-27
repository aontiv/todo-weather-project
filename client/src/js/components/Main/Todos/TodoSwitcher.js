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
                    updateTodo={this.props.updateTodo}
                />
            );
        }
    }
}

export default TodoSwitcher;
