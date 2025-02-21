// import Axios from 'axios';
// import { USER_SERVER } from "../Config.js";
import {
    SAVE_MESSAGE,
    // REGISTER_USER
} from './types';

export function saveMessage(dataToSubmit) {
    return {
        type: SAVE_MESSAGE,
        payload: dataToSubmit
    }
}

// export function registerUser(dataToSubmit) {
//     console.log("user action res: ", dataToSubmit);
//     const request = Axios.post(`${USER_SERVER}/register`, dataToSubmit).then(
//         (response) => response.data
//     );
//     return {
//         type: REGISTER_USER,
//         payload: request
//     }
// }
