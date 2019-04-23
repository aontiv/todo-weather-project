import { readResponse, jsonify } from "./helpers";

var fs = require("fs");

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
