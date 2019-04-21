import { theme } from "../theme";
import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import WeatherList from "./WeatherList/WeatherList";
import HeaderSwitcher from "./HeaderSwitcher/HeaderSwitcher";
import AuthorizationSwitcher from "./AuthorizationSwitcher/AuthorizationSwitcher";

const styles = {
    app: `
        @media screen and (min-width: 37.5rem) {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    `,
    grid: `
        display: grid;
        padding: 0 1rem;
        grid-column-gap: 1rem;
        grid-template-columns: repeat(4, 1fr);

        @media screen and (min-width: 37.5rem) {
            max-width: 37.5rem;
        }

        @media screen and (min-width: 60rem) {
            max-width: 60rem;
        }
    `
};

class App extends Component {
    state = {
        username: "",
        authorized: false
    };

    login = username => {
        this.setState({ username, authorized: true });
    };

    logout = () => {
        this.setState({ username: "", authorized: false });
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div css={styles.app}>
                    <HeaderSwitcher
                        authorized={this.state.authorized}
                        username={this.state.username}
                        logout={this.logout}
                    />
                    <div css={styles.grid}>
                        <WeatherList />
                        <AuthorizationSwitcher
                            login={this.login}
                            authorized={this.state.authorized}
                        />
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
