import React, { Component, Fragment } from "react";

import AddTodo from "./AddTodo";
import Authorize from "./Authorize";
import TodoSwitcher from "./TodoSwitcher";

class AuthorizationSwitcher extends Component {
    render() {
        const authorized = this.props.authorized;

        if (authorized) {
            return (
                <Fragment>
                    <AddTodo />
                    <TodoSwitcher
                        isEmpty={false}
                    />
                </Fragment>
            );
        }
        else {
            return (
                <Authorize />
            );
        }
    }
}

export default AuthorizationSwitcher;
