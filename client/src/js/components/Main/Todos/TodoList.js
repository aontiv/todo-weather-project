import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <ul className="list-group px-2 col-sm-10">
                    {
                        this.props.todos.map(todo => (
                            <Todo
                                key={`todo: ${todo.todoId}`}
                                todoId={todo.todoId}
                                timestamp={todo.timestamp}
                                text={todo.text}
                                complete={todo.complete}
                                deleteTodo={this.props.deleteTodo}
                                updateTodo={this.props.updateTodo}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
