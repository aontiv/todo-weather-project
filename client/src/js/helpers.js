import moment from "moment";

const Helpers = () => {
    const capitalize = string => {
        return string[0].toUpperCase() + string.slice(1);
    };
      
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
            return parseResponse(response)
                .then(data => new Error(data.message))
        }
    };

    return {
        getFormattedTime,
        jsonify,
        handleResponse,
        capitalize
    }
}

export default Helpers();
