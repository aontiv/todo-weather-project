import React, { Component } from "react";

import Todo from "./Todo";

const styles = {
    container: `
        grid-row: 3;
        grid-column: 1 / 5;
    `
};

class TodoList extends Component {
    render() {
        return (
            <ul css={styles.container}>
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
        );
    }
}

export default TodoList;
