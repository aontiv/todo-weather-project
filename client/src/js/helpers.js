import moment from "moment";

export const getFormattedTime = () => {
    return moment().format("MMMM DD, YYYY hh:mm:ss A");
};

export const readResponse = response => {
    return response.json();
};

export const parseJSON = json => {
    return JSON.parse(json);
};

export const jsonify = object => {
    return JSON.stringify(object);
};

export const logResponse = data => {
    console.log(data.message);
};
