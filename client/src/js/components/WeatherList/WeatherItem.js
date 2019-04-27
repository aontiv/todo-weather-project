import { css } from "styled-components";
import React, { Component } from "react";

const styles = {
    tile: `
        display: flex;
        width: 6.0625rem;
        height: 8.4375rem;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
        border-radius: 0.3125rem;
        margin-bottom: 0.3125rem;
        box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.25);

        @media screen and (min-width: 37.5rem) {
            width: 9.375rem;
            height: 13.4375rem;
            margin-bottom: 0.625rem;
        }

        @media screen and (min-width: 60rem) {
            width: 8.5rem;
            height: 12.5625rem;
        }
    `,
    li: `
        margin-right: 1.15rem;

        :last-child {
            margin-right: 0;
        }
    `,
    img: `
        width: 4.6875rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 37.5rem) {
            width: 7.5rem;
            margin-bottom: 1.5rem;
        }
    `,
    temp: `
        font-size: 0.75rem;

        @media screen and (min-width: 37.5rem) {
            font-size: 1.25rem;
        }
    `,
    date: css`
        text-align: center;
        font-size: 0.75rem;
        color: ${props => props.theme.PRIMARY_LIGHT};

        @media screen and (min-width: 37.5rem) {
            font-size: 0.85rem;
        }
    `
};

class WeatherItem extends Component {
    render() {
        return (
            <li css={styles.li}>
                <div css={styles.tile}>
                    <img css={styles.img} src={this.props.imageUrl} alt={this.props.altText} />
                    <span css={styles.temp}>{this.props.low + "\u00B0" + " F"} - {this.props.high + "\u00B0" + " F"}</span>
                </div>
                <p css={styles.date}>{this.props.date}</p>
            </li>
        );
    }
}

export default WeatherItem;
