import { theme } from "../theme";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import WeatherList from "./WeatherList/WeatherList";
import HeaderSwitcher from "./HeaderSwitcher/HeaderSwitcher";
import AuthorizationSwitcher from "./AuthorizationSwitcher/AuthorizationSwitcher";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="app">
                    <HeaderSwitcher
                        authorized={true}
                    />
                    <WeatherList />
                    <AuthorizationSwitcher
                        authorized={true}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
