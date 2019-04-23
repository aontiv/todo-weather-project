import moment from "moment";
import uuidv4 from "uuid/v4";
import React, { Component } from "react";
import { readResponse } from "../../helpers";

import WeatherItem from "./WeatherItem";

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
        weatherList: [
            {
                id: uuidv4(),
                imageUrl: sunny,
                altText: "sunny",
                low: "50",
                high: "95",
                date: "April 12, 2019"
            },
            {
                id: uuidv4(),
                imageUrl: thunderWind,
                altText: "thunder and windy",
                low: "5",
                high: "35",
                date: "April 13, 2019"
            },
            {
                id: uuidv4(),
                imageUrl: thunderWind,
                altText: "thunder and windy",
                low: "10",
                high: "55",
                date: "April 14, 2019"
            },
            {
                id: uuidv4(),
                imageUrl: sunny,
                altText: "sunny",
                low: "65",
                high: "85",
                date: "April 15, 2019"
            },
            {
                id: uuidv4(),
                imageUrl: rain,
                altText: "rain",
                low: "45",
                high: "55",
                date: "April 16, 2019"
            }
        ]
    };

    componentDidMount() {
        this.getIP()
    }

    getIP = () => {
        fetch("https://api.ipify.org?format=json")
            .then(readResponse)
            .then(this.getLocationKey)
    };

    getLocationKey = ({ ip }) => {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=KwDARgjJ91Ka7VuVLYvOShmZXUCctrhd&q=${ip}`)
            .then(readResponse)
            .then(this.getFiveDayForecast)
    };

    getFiveDayForecast = ({ Key })=> {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=KwDARgjJ91Ka7VuVLYvOShmZXUCctrhd&details=true`)
            .then(readResponse)
            .then(this.createForecast)
    };

    createForecast = ({ DailyForecasts }) => {
        const forecastObjects = DailyForecasts.map(forecast => {
            return {
                id: uuidv4(),
                imageUrl: forecast.Day.Icon,
                altText: forecast.Day.IconPhrase,
                low: forecast.Temperature.Minimum.value,
                high: forecast.Temperature.Maximum.value,
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
