import React, { Component } from "react";

import WeatherList from "./WeatherList/WeatherList";
import HeaderSwitcher from "./HeaderSwitcher/HeaderSwitcher";
import AuthorizationSwitcher from "./AuthorizationSwitcher/AuthorizationSwitcher";

class App extends Component {
    render() {
        return (
            <div className="app">
                <HeaderSwitcher
                    authorized={false}
                />
                <WeatherList />
                <AuthorizationSwitcher
                    authorized={false}
                />
            </div>
        );
    }
}

export default App;
