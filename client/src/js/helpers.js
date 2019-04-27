import moment from "moment";

const Helpers = () => {

    const getFormattedTime = () => {
        return moment(new Date()).format("MMMM DD, YYYY hh:mm:ss A");
    };

    const parseResponse = response => {
        return response.json();
    };

    const jsonify = object => {
        return JSON.stringify(object);
    };

    const handleResponse = response => {
        if (response.status === 200) {
            return parseResponse(response);
        }
        else {
            parseResponse(response)
                .then(data => {
                    throw new ReferenceError(data.message)
                })
        }
    };

    return {
        getFormattedTime,
        jsonify,
        handleResponse
    }
}

export default Helpers();
