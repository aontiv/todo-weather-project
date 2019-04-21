import React, { Component } from "react";

const styles = {
    container: `
        grid-row: 3;
        display: flex;
        grid-column: 1 / 5;
        justify-content: center;
    `,
    span: `
        @media screen and (min-width: 60rem) {
            font-size: 1.75rem;
        }
    `
};

class TodoListEmpty extends Component {
    render() {
        return (
            <div css={styles.container}>
                <span css={styles.span}>- No Todos -</span>
            </div>
        );
    }
}

export default TodoListEmpty;
