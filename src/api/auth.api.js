import axios from "axios";

export const login = (data) => {
    return await axios.post('' , data)
};
