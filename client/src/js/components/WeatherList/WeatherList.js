import moment from "moment";
import uuidv4 from "uuid/v4";
import Client from "../../Client";
import React, { Component } from "react";

import WeatherItem from "./WeatherItem";

// Importing all images
const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context("../../../img/", false, /\.png$/));

const styles = {
    ul: `
        grid-row: 1;
        display: flex;
        overflow: hidden;
        grid-column: 1 / 5;
        justify-content: space-between;
    `
};

class WeatherList extends Component {
    state = {
        weatherList: []
    };

    // componentDidMount() {
    //     Client.getIpAddress()
    //         .then(this.createForecast)
    // }

    createForecast = (dailyForecasts) => {
        const forecastObjects = dailyForecasts.map(forecast => {
            return {
                id: uuidv4(),
                imageUrl: cache[`./${forecast.Day.Icon}.png`],
                altText: forecast.Day.IconPhrase,
                low: forecast.Temperature.Minimum.Value,
                high: forecast.Temperature.Maximum.Value,
                date: moment(forecast.Date).format("MMMM DD, YYYY")
            };
        });
        this.setState({ weatherList: forecastObjects });
    };

    render() {
        return (
            <ul css={styles.ul}>
                {
                    this.state.weatherList.map(weatherItem => (
                        <WeatherItem
                            key={weatherItem.id}
                            id={weatherItem.id}
                            imageUrl={weatherItem.imageUrl}
                            altText={weatherItem.altText}
                            low={weatherItem.low}
                            high={weatherItem.high}
                            date={weatherItem.date}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default WeatherList;
