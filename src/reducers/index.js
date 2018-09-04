import { ADD_REMINDER } from "../constant";

const tempReminder= (action)=> {
    return {
        text: action.text,
        id: Math.random() //since we have not many data item, so id is not likely to duplicate just for fast dev
    }
};

const reminder = (state=[], action={})=> {
    switch(action.type) {
        case ADD_REMINDER: {
            return [
                ...state,
                tempReminder(action)
            ]
        }
        default: return state;
    }
}

export default reminder;