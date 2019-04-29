import React, { Component } from "react";

class AddTodo extends Component {
    state = {
        fields: {
            text: ""
        }
    };

    handleTextChange = evt => {
        const text = evt.target.value;
        this.setState({ fields: { text }});
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        this.props.addTodo(this.state.fields.text);
        this.setState({ fields: { text: "" } });
    };

    render() {
        return (
            <div className="row justify-content-center mb-5">
                <form className="form-inline justify-content-center col-sm-6" onSubmit={this.handleFormSubmit}>
                    <input
                        className="form-control w-75"
                        type="text"
                        value={this.state.fields.text}
                        onChange={this.handleTextChange}
                        placeholder="add todo..."
                    />
                    <button
                        className="text-white btn btn-primary"
                        type="submit"
                    >
                        ADD
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
