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
                <TodoList />
            );
        }
    }
}

export default TodoSwitcher;
