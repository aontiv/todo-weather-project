import { css } from "styled-components";
import React, { Component } from "react";

import timesSolid from "../../../img/times-solid.png";

const styles = {
    li: `
        display: flex;
        height: 5.25rem;
        padding: 0.3125rem;
        margin-bottom: 1.25rem;
        border-radius: 0.3125rem;
        flex-flow: column nowrap;
        box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.25);

        @media screen and (min-width: 37.5rem) {
            height: 7.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 0.3125rem 0.3125rem rgba(0, 0, 0, 0.25);
        }
    `,
    tile: `
        display: flex;
        align-items: center;
        margin-bottom: 0.3125rem;
        justify-content: space-between;
    `,
    timestamp: `
        color: #5d5d5d;
        font-size: 0.85rem;

        @media screen and (min-width: 37.5rem) {
            font-size: 1.25rem;
        }
    `,
    img: `
        width: 0.75rem;
        display: inline-block;

        :hover {
            cursor: pointer;
        }

        @media screen and (min-width: 37.5rem) {
            width: 1rem;
        }
    `,
    p: css`
        flex: 1;
        color: #fff;
        display: flex;
        font-size: 1rem;
        padding: 0.625rem;
        align-items: center;
        border-radius: 0.3125rem;
        background-color: ${props => props.theme.primaryL};

        @media screen and (min-width: 37.5rem) {
            font-size: 1.25rem;
        }
    `
};

class Todo extends Component {
    handleDeleteClick = () => {
        this.props.deleteTodo(this.props.id);
    };

    handleTodoClick = () => {
        this.props.toggleTodoComplete(this.props.id);
    };

    render() {
        return (
            <li css={styles.li}>
                <div css={styles.tile}>
                    <span css={styles.timestamp}>{this.props.timestamp}</span>
                    <div>
                        <a onClick={this.handleDeleteClick}><img css={styles.img} src={timesSolid} alt="delete" /></a>
                    </div>
                </div>
                <p css={styles.p} onClick={this.handleTodoClick}>{this.props.text}</p>
            </li>
        );
    }
}

export default Todo;
