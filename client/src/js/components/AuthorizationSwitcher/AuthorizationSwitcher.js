import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Authorize from "./Authorize";
import TodoContainer from "./TodoContainer";

class AuthorizationSwitcher extends Component {
    render() {
        const authorized = this.props.authorized;

        return (
            <Router>
                <Route path="/" exact render={() => {
                    if (authorized) {
                        return (
                            <TodoContainer
                                userId={this.props.userId}
                            />
                        );
                    }
                    else {
                        return (<Redirect to="/login" />);
                    }
                }} />
                <Route path="/login" render={() => {
                    if (authorized) {
                        return (<Redirect to="/" />);
                    }
                    else {
                        return (
                            <Authorize
                                login={this.props.login}
                            />
                        );
                    }
                }} />
            </Router>
        );
    }
}

export default AuthorizationSwitcher;
