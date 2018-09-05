import { ADD_REMINDER, DELETE_REMINDER, DELETE_REMINDER_ALL } from "../constant";

export const addReminder = (text, time) => {
    return {
        type: ADD_REMINDER,
        text, 
        time
    }
}

export const deleteReminder = (id) => {
    return {
        type: DELETE_REMINDER,
        id
    }
}

export const deleteReminderAll = () => {
    return {
        type: DELETE_REMINDER_ALL,
    }
}


