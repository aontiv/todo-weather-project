import Helpers from "./Helpers";

const Client = () => {
    const login = user => {
        return fetch("/login", {
            method: "POST",
            body: Helpers.jsonify(user),
            headers: { "Content-Type": "application/json" }
        })
        .then(Helpers.handleResponse)
    };

    const getTodos = userId => {
        return fetch(`/get_todos/${userId}`)
                .then(Helpers.handleResponse)
    };

    const addUser = user => {
        return fetch("/add_user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: Helpers.jsonify(user)
        })
        .then(Helpers.handleResponse)
    };

    const addTodo = todo => {
        return fetch(`/add_todo`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: Helpers.jsonify(todo)
        })
        .then(Helpers.handleResponse)
    };

    const updateTodo = (todoId, todos) => {
        const newTodo = todos.filter(todo => todo.todoId === todoId)[0];

        return fetch("/update_todo", {
            method: "UPDATE",
            headers: { "Content-Type": "application/json" },
            body: Helpers.jsonify(newTodo)
        })
        .then(Helpers.handleResponse)
    };

    const deleteTodo = todoId => {
        return fetch(`/delete_todo/${todoId}`, {
            method: "DELETE"
        })
        .then(Helpers.handleResponse)
    };

    const getIpAddress = () => {
        return fetch("https://api.ipify.org?format=json")
            .then(Helpers.handleResponse)
            .then(getWeatherForecast)
    };

    const getWeatherForecast = ipAddress => {
        return fetch("/get_weather_forecast", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: Helpers.jsonify(ipAddress)
        })
        .then(Helpers.handleResponse)
    };

    return {
        login,
        getTodos,
        addUser,
        addTodo,
        updateTodo,
        deleteTodo,
        getIpAddress
    }
}

export default Client();
