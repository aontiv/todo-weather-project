import React, { Component } from "react";

import WeatherList from "./WeatherList/WeatherList";
import HeaderSwitcher from "./Header/HeaderSwitcher";
import AuthorizationSwitcher from "./Main/Authorization/AuthorizationSwitcher";

class App extends Component {
    state = {
        user: {
            userId: null,
            username: "",
        },
        authorized: false
    };

    login = user => {
        this.setState({ user, authorized: true });
    };

    logout = () => {
        const user = { id: null, username: "" };
        this.setState({ user, authorized: false });
    };

    render() {
        return (
            <div>
                <HeaderSwitcher
                    authorized={this.state.authorized}
                    username={this.state.user.username}
                    logout={this.logout}
                />
                <div className="container">
                    <WeatherList />
                    <AuthorizationSwitcher
                        login={this.login}
                        userId={this.state.user.userId}
                        authorized={this.state.authorized}
                    />
                </div>
            </div>
        );
    }
}

export default App;
