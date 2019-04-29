import moment from "moment";
import uuidv4 from "uuid/v4";
import Client from "../../../Client";
import Helpers from "../../../Helpers";
import React, { Component, Fragment } from "react";

import AddTodo from "./AddTodo";
import TodoSwitcher from "./TodoSwitcher";

class TodoContainer extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        Client.getTodos(this.props.userId)
            .then(this.handleData)
    }

    handleData = data => {
        this.initialState(data);
    };

    initialState = todos => {
        this.setState({ todos });
    };

    addTodo = todoText => {
        const newTodo = this.createTodo(todoText);
        const newTodos = this.state.todos.concat([newTodo]);
        this.setState({ todos: newTodos });

        Client.addTodo(newTodo)
    };

    deleteTodo = todoId => {
        const newTodos = this.state.todos.filter(todo => todo.todoId !== todoId);
        this.setState({ todos: newTodos });

        Client.deleteTodo(todoId);
    };

    updateTodo = todoId => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.todoId === todoId) {
                if (todo.complete) {
                    todo.complete = false;
                }
                else {
                    todo.complete = true;
                }
            }
            return todo;
        });
        this.setState({ todos: newTodos });

        Client.updateTodo(todoId, newTodos);
    };

    createTodo = todoText => {
        return {
            todoId: uuidv4(),
            timestamp: Helpers.getFormattedTime(),
            text: todoText,
            complete: false,
            userId: this.props.userId
        };
    };

    sortTodos = todos => {
        return todos.sort((a, b) => {
            if (moment(b.timestamp).isBefore(a.timestamp)) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };

    render() {
        const isEmpty = this.state.todos.length === 0 ? true : false;
        const sortedTodos = this.sortTodos(this.state.todos);

        return (
            <Fragment>
                <AddTodo
                    addTodo={this.addTodo}
                />
                <TodoSwitcher
                    isEmpty={isEmpty}
                    todos={sortedTodos}
                    deleteTodo={this.deleteTodo}
                    updateTodo={this.updateTodo}
                />
            </Fragment>
        );
    }
}

export default TodoContainer;
