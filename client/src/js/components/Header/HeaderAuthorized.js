import React, { Component } from "react";

class HeaderAuthorized extends Component {
    handleLogoutClick = () => {
        this.props.logout();
    };

    render() {
        return (
            <nav className="navbar text-white">
                <h1 className="navbar-h1">Todo Weather</h1>
                <div className="d-flex flex-column align-items-end">
                    <button className="navbar-btn btn btn-link text-white" type="button" onClick={this.handleLogoutClick}>logout</button>
                    <h2 className="navbar-h2">{this.props.username}</h2>
                </div>
            </nav>
        );
    }
}

export default HeaderAuthorized;
