import moment from "moment";

export const getFormattedTime = () => {
    return moment().format("MMMM DD, YYYY hh:mm:ss A");
};

export const usernameMatch = (users, username) => {
    let result = null;
    users.forEach(user => {
        if (user.username === username) {
            result = user;
        }
    });

    return result;
};

export const passwordMatch = (user, password) => {
    let result = null;
    if(user.password === password) {
        result = { id: user.id, username: user.username };
    }

    return result;
};