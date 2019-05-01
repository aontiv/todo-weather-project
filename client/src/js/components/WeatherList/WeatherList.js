import moment from "moment";
import uuidv4 from "uuid/v4";
import Client from "../../Client";
import React, { Component } from "react";

import WeatherItem from "./WeatherItem";

// Importing all images
const cache = {};

const importAll = r => {
  r.keys().forEach(key => cache[key] = r(key));
};

importAll(require.context("../../../img/", false, /\.png$/));


class WeatherList extends Component {
    state = {
        weatherList: []
    };

    componentDidMount() {
        Client.getIpAddress()
            .then(this.createForecast)
    }

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
            <div className="row justify-content-center mb-5">
                <ul className="overflow-auto list-group list-group-horizontal w-100 justify-content-between">
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
            </div>
        );
    }
}

export default WeatherList;
