import { ADD_REMINDER } from "../constant";

export const addReminder = (text) => {
    return {
        type: ADD_REMINDER,
        text
        
    }
}
