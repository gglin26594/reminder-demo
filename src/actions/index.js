import { ADD_REMINDER } from "../constant";

export const addReminder = (text, time) => {
    return {
        type: ADD_REMINDER,
        text, 
        time
    }
}
