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

// // UPDATE REQUESTS
// export const _updateTodo = newTodo => {
//     return new Promise(resolve => {
//         window.setTimeout(() => {
//             fs.readFile(DB, "utf8", (err, data) => {
//                 if (err) console.log(err);

//                 const db = JSON.parse(data);
//                 const newTodos = db.todosTable.map(todo => {
//                     if (todo.id === newTodo.id) {
//                         return newTodo;
//                     }
//                     return todo;
//                 });
//                 const newDB = JSON.stringify({ ...db, todosTable: newTodos }, null, 4);

//                 fs.writeFile(DB, newDB, "utf8", err => {
//                     if (err) console.log(err);

//                     resolve(JSON.stringify({ status: 200, message: `todo with id: ${newTodo.id} updated`}));
//                 });
//             });
//         }, 1000);
//     })
// };

// // DELETE REQUESTS
// export const _deleteTodo = todoId => {
//     return new Promise(resolve => {
//         window.setTimeout(() => {
//             fs.readFile(DB, "utf8", (err, data) => {
//                 if (err) console.log(err);

//                 const db = JSON.parse(data);
//                 const newTodos = db.todosTable.filter(todo => todo.id !== todoId);
//                 const newDB = JSON.stringify({ ...db, todosTable: newTodos }, null, 4);

//                 fs.writeFile(DB, newDB, "utf8", err => {
//                     if (err) console.log(err);

//                     resolve(JSON.stringify({ status: 200, message: `todo with id: ${todoId} was deleted` }));
//                 });
//             });
//         }, 1000);
//     });
// };