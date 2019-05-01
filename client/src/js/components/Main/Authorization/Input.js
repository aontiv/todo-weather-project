import React from "react";

const Input = props => {
    return (
        <div className={`form-group mb-${props.margin}`}>
            <input
                className={props.className}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                required={props.required}
                minLength={props.minLength}
                pattern={props.pattern}
                ref={props.reference}
            />
            <div className="valid-feedback">Valid format</div>
            <div className="invalid-feedback">Invalid format</div>
        </div>
    );
}

export default Input;
