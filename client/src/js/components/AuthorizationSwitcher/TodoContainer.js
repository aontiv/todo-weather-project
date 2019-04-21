import moment from "moment";
import uuidv4 from "uuid/v4";
import { getFormattedTime } from "../../helpers";
import React, { Component, Fragment } from "react";

import AddTodo from "./AddTodo";
import TodoSwitcher from "./TodoSwitcher";

class TodoContainer extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                timestamp: "April 03, 2019 12:05:35 PM",
                text: "Walk the dog",
                complete: false
            },
            {
                id: uuidv4(),
                timestamp: "April 01, 2019 01:15:50 PM",
                text: "Take out the trash",
                complete: false
            },
            {
                id: uuidv4(),
                timestamp: "March 31, 2019 01:15:50 PM",
                text: "Drop off the mail",
                complete: false
            }
        ]
    };

    addTodo = todoText => {
        const newTodo = this.createTodo(todoText);
        const newTodos = this.state.todos.concat([newTodo]);
        this.setState({ todos: newTodos });
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
            text: todoText
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
