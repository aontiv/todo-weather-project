import { login, getAllUserTodos, addUser, addTodo, updateTodo, deleteTodo } from "../clientAPI";

// GET USER NAME TESTS
test("login success response", () => {
    const id = 1;
    const username = `testuser${id}`;
    const password = `password${id}`;
    const result = JSON.stringify({ status: 200, body: { id, username: `testuser${id}` } });

    return login(username, password).then(data => {
        expect(data).toBe(result);
    });
});

test("login username error response", () => {
    const id = 0;
    const username = `testuser${id}`;
    const password = `password1`;
    const result = JSON.stringify({ status: 400, message: `${username} not found` });

    return login(username, password).then(data => {
        expect(data).toBe(result);
    });
});

test("login password error response", () => {
    const id = 0;
    const username = `testuser1`;
    const password = `password${id}`;
    const result = JSON.stringify({ status: 400, message: `${username}'s password is incorrect` });

    return login(username, password).then(data => {
        expect(data).toBe(result);
    });
});

// GET ALL USER TODOS
test("getAllUserTodos success response", () => {
    const id = 1;
    const todo = {
        "id": 1,
        "timestampe": "April 01, 2019 01:01:01 AM",
        "text": "Todo text",
        "complete": false,
        "userId": 1
    };
    const result = JSON.stringify({ status: 200, body: { todos: [ todo ] } });

    return getAllUserTodos(id).then(data => {
        expect(data).toBe(result);
    });
});

// ADD NEW USER
test("addUser success response", () => {
    const user = {
        "id": 4,
        "username": "testuser4",
        "password": "password4"
    };
    const result = JSON.stringify({ status: 200, message: `new user with id: ${user.id} added`});

    return addUser(user).then(data => {
        expect(data).toBe(result);
    });
});

// ADD NEW TODO
test("addTodo success response", () => {
    const todo = {
        "id": 4,
        "timestampe": "April 04, 2019 01:01:01 AM",
        "text": "Todo text",
        "complete": false,
        "userId": 4
    };
    const result = JSON.stringify({ status: 200, message: `new todo with id: ${todo.id} added` });

    return addTodo(todo).then(data => {
        expect(data).toBe(result);
    });
});

// UPDATE TODO
test("updateTodo success response", () => {
    const todo = {
        "id": 1,
        "timestampe": "April 01, 2019 01:01:01 AM",
        "text": "<ReactElement>",
        "complete": true,
        "userId": 1
    };
    const result = JSON.stringify({ status: 200, message: `todo with id: ${todo.id} updated`});

    return updateTodo(todo).then(data => {
        expect(data).toBe(result);
    });
});

// DELETE TODO
test.only("deleteTodo success responce", () => {
    const id = 1;
    const result = JSON.stringify({ status: 200, message: `todo with id: ${id} was deleted` });

    return deleteTodo(id).then(data => {
        expect(data).toBe(result);
    });
});
