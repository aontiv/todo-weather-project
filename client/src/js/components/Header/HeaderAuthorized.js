import React, { Component } from "react";

class HeaderAuthorized extends Component {
    handleLogoutClick = e => {
        e.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <nav className="navbar text-white px-0 px-sm-2">
                <h1>Todo Weather</h1>
                <div className="d-flex flex-column align-items-end">
                    <a href="" className="logout text-white" onClick={this.handleLogoutClick}>logout</a>
                    <h2 className="d-none d-sm-block">{this.props.username}</h2>
                </div>
            </nav>
        );
    }
}

export default HeaderAuthorized;
