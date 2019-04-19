import React, { Component } from "react";

import TodoItem from "./TodoItem";

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
                <TodoItem
                    timestamp="April 03, 2019 12:05:35 PM"
                    text="Walk the dog"
                />
                <TodoItem
                    timestamp="April 01, 2019 01:15:50 PM"
                    text={<s>Take out the trash</s>}
                />
                <TodoItem
                    timestamp="March 31, 2019 01:15:50 PM"
                    text="Drop off the mail"
                />
            </ul>
        );
    }
}

export default TodoList;
