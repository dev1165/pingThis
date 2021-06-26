import axios from 'axios';

export const getApiCall = async (
    url,
    callback,
    errorMessage,
    successMessage
) => {

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response && response.data) {
            // API_CALL.hideSpinner();
            if (callback) {
                callback();
            }
            const resp = response.data;
            return resp;
        }
    } catch (error) {
        if (errorMessage) {
            // ALERT.warningMessage(errorMessage);
        } else {
            // ALERT.errorMessage(error?.response?.data?.error?.error_message);
        }
        // API_CALL.hideSpinner();
        return error;
    }
};