import { usernameMatch, passwordMatch } from "./helpers";

var fs = require("fs");
const DB = "./src/DATABASE.json";

// GET REQUESTS
export const login = (username, password) => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            fs.readFile(DB, "utf8", (err, data) => {
                if (err) console.log(err);

                const db = JSON.parse(data);
                const user = usernameMatch(db.usersTable, username);
                const authUser = user ? passwordMatch(user, password) : null;

                let result;
                if(!user) result = {status: 400, message: `${username} not found`};
                if(user && !authUser) result = {status: 400, message: `${username}'s password is incorrect`};
                if(user && authUser) result = {status: 200, body: authUser};

                resolve(JSON.stringify(result));
            });
        }, 1000);
    });
};

export const getAllUserTodos = userId => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            fs.readFile(DB, "utf8", (err, data) => {
                if (err) console.log(err);

                const db = JSON.parse(data);
                const todos = db.todosTable.filter(todo => todo.userId === userId);
                resolve(JSON.stringify({ status: 200, body: { todos } }));
            });
        }, 1000);
    });
};

// POST REQUESTS
export const addUser = user => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            fs.readFile(DB, "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                }
                const db = JSON.parse(data);
                const newUsers = db.usersTable.concat([ user ]);
                const newDB = JSON.stringify({ ...db, usersTable: newUsers }, null, 4);

                fs.writeFile(DB, newDB, "utf8", err => {
                    if (err) console.log(err);

                    resolve(JSON.stringify({ status: 200, message: `new user with id: ${user.id} added` }));
                });
            });
        }, 1000);
    });
};

export const addTodo = todo => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            fs.readFile(DB, "utf8", (err, data) => {
                if (err) console.log(err);

                const db = JSON.parse(data);
                const newTodos = db.todosTable.concat([ todo ]);
                const newDB = JSON.stringify({ ...db, todosTable: newTodos }, null, 4);
                
                fs.writeFile(DB, newDB, "utf8", err => {
                    if (err) console.log(err);

                    resolve(JSON.stringify({ status: 200, message: `new todo with id: ${todo.id} added` }));
                });
            })
        }, 1000);
    });
};

// UPDATE REQUESTS
export const updateTodo = newTodo => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            fs.readFile(DB, "utf8", (err, data) => {
                if (err) console.log(err);

                const db = JSON.parse(data);
                const newTodos = db.todosTable.map(todo => {
                    if (todo.id === newTodo.id) {
                        return newTodo;
                    }
                    return todo;
                });
                const newDB = JSON.stringify({ ...db, todosTable: newTodos }, null, 4);

                fs.writeFile(DB, newDB, "utf8", err => {
                    if (err) console.log(err);

                    resolve(JSON.stringify({ status: 200, message: `todo with id: ${newTodo.id} updated`}));
                });
            });
        }, 1000);
    })
};

// DELETE REQUESTS
export const deleteTodo = todoId => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            fs.readFile(DB, "utf8", (err, data) => {
                if (err) console.log(err);

                const db = JSON.parse(data);
                const newTodos = db.todosTable.filter(todo => todo.id !== todoId);
                const newDB = JSON.stringify({ ...db, todosTable: newTodos }, null, 4);

                fs.writeFile(DB, newDB, "utf8", err => {
                    if (err) console.log(err);

                    resolve(JSON.stringify({ status: 200, message: `todo with id: ${todoId} was deleted` }));
                });
            });
        }, 1000);
    });
};