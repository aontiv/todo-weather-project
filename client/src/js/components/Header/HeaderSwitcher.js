import React, { Component } from "react";

import HeaderAuthorized from "./HeaderAuthorized";
import HeaderNotAuthorized from "./HeaderNotAuthorized";

class HeaderSwitcher extends Component {
    render() {
        const authorized = this.props.authorized;

        return (
            <div className="bg-primary container-fluid mb-2 mb-sm-5">
                <div className="container">
                    {
                        authorized ? (
                            <HeaderAuthorized
                                username={this.props.username}
                                logout={this.props.logout}
                            />
                        ) : (
                            <HeaderNotAuthorized />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default HeaderSwitcher;
