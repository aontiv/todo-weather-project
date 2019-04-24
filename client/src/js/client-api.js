import { SECRET_KEY } from "./SECRET_KEY";
import { readResponse, jsonify } from "./helpers";

// Server API
export const _login = (user) => {
    return fetch("/login", {
                method: "POST",
                body: jsonify(user),
                headers: { "Content-Type": "application/json" }
            })
            .then(readResponse)
};

export const _getUserTodos = userId => {
    return fetch(`/get_todos/${userId}`)
            .then(readResponse)
};

export const _addUser = user => {
    return fetch("/add_user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonify(user)
            })
            .then(readResponse)
};

export const _addTodo = todo => {
    return fetch(`/add_todo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jsonify(todo)
            })
            .then(readResponse)
};

export const _updateTodo = (id, todos) => {
    const newTodo = todos.filter(todo => todo.id === id)[0];

    return fetch("/update_todo", {
                method: "UPDATE",
                headers: { "Content-Type": "application/json" },
                body: jsonify(newTodo)
            })
            .then(readResponse)
};

export const _deleteTodo = todoId => {
    return fetch(`/delete_todo/${todoId}`, {
                method: "DELETE"
            })
            .then(readResponse)
};


// Accuweather API
export const _getWeatherForecast = () => {
    return _getIP();
};

const _getIP = () => {
    return fetch("https://api.ipify.org?format=json")
        .then(readResponse)
        .then(_getLocationKey)
};

const _getLocationKey = ({ ip }) => {
    return fetch(`http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${SECRET_KEY}&q=${ip}`)
        .then(readResponse)
        .then(_getFiveDayForecast)
};

const _getFiveDayForecast = ({ Key })=> {
    return fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?apikey=${SECRET_KEY}&details=true`)
        .then(readResponse)
};
