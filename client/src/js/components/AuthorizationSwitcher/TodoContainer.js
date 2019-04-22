import moment from "moment";
import uuidv4 from "uuid/v4";
import React, { Component, Fragment } from "react";
import { _getUserTodos, _addTodo } from "../../client-api";
import { getFormattedTime, logResponse } from "../../helpers";

import AddTodo from "./AddTodo";
import TodoSwitcher from "./TodoSwitcher";

class TodoContainer extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        _getUserTodos(this.props.userId)
            .then(this.handleData)
    }

    handleData = data => {
        this.initialState(data.body);
    };

    initialState = todos => {
        this.setState({ todos });
    };

    addTodo = todoText => {
        const newTodo = this.createTodo(todoText);
        const newTodos = this.state.todos.concat([newTodo]);
        this.setState({ todos: newTodos });

        _addTodo(newTodo)
            .then(logResponse)
    };

    deleteTodo = id => {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: newTodos });
    };

    toggleTodoComplete = id => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                if (todo.complete) {
                    return this.markComplete(todo);
                }
                else {
                    return this.markIncomplete(todo);
                }
            }
            else {
                return todo;
            }
        });
        this.setState({ todos: newTodos });
    };

    markComplete = todo => {
        const text = todo.text.props.children;
        todo.complete = false;
        return { ...todo, text };
    };

    markIncomplete = todo => {
        todo.complete = true;
        return { ...todo, text: <s>{todo.text}</s> };
    };

    createTodo = todoText => {
        return {
            id: uuidv4(),
            timestamp: getFormattedTime(),
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
                    toggleTodoComplete={this.toggleTodoComplete}
                />
            </Fragment>
        );
    }
}

export default TodoContainer;
