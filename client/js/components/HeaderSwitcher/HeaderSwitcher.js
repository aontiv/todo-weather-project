import React, { Component } from "react";

import HeaderAuthorized from "./HeaderAuthorized";
import HeaderNotAuthorized from "./HeaderNotAuthorized";

class HeaderSwitcher extends Component {
    render() {
        const authorized = this.props.authorized;

        if (authorized) {
            return (
                <HeaderAuthorized
                    username="test username"
                />
            );
        }
        else {
            return (
                <HeaderNotAuthorized />
            );
        }
    }
}

export default HeaderSwitcher;
