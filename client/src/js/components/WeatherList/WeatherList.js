import React, { Component } from "react";

import WeatherItem from "./WeatherItem";

// Images
import rain from "../../../img/rain.png"
import sunny from "../../../img/sunny.png";
import thunderWind from "../../../img/thunder-wind.png";
import sunnyClouds from  "../../../img/sunny-clouds.png";

const styles = {
    ul: `
        grid-row: 1;
        display: flex;
        overflow: hidden;
        grid-column: 1 / 5;
    `
};

class WeatherList extends Component {
    render() {
        return (
            <ul css={styles.ul}>
                <WeatherItem
                    imageUrl={sunnyClouds}
                    altText="partly cloudy"
                    low="42"
                    high="100"
                    date="Today"
                />
                <WeatherItem
                    imageUrl={sunny}
                    altText="sunny"
                    low="50"
                    high="95"
                    date="April 12, 2019"
                />
                <WeatherItem
                    imageUrl={thunderWind}
                    altText="thunder and windy"
                    low="5"
                    high="35"
                    date="April 13, 2019"    
                />
                <WeatherItem
                    imageUrl={thunderWind}
                    altText="thunder and windy"
                    low="10"
                    high="55"
                    date="April 14, 2019"                 
                />
                <WeatherItem
                    imageUrl={sunny}
                    altText="sunny"
                    low="65"
                    high="85"
                    date="April 15, 2019"                 
                />
                <WeatherItem
                    imageUrl={rain}
                    altText="rain"
                    low="45"
                    high="55"
                    date="April 16, 2019"                   
                />
            </ul>
        );
    }
}

export default WeatherList;
