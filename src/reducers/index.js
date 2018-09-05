import { ADD_REMINDER, DELETE_REMINDER, DELETE_REMINDER_ALL } from "../constant";

const tempReminder = action => {
	return {
		text: action.text,
		id: Math.random(), //since we have not many data item, so id is not likely to duplicate just for fast dev
		time: action.time
	};
};

const reminder = (state = [], action = {}) => {
	switch (action.type) {
		case ADD_REMINDER: {
			return [...state, tempReminder(action)];
		}
		case DELETE_REMINDER: {
			//below is a failure case, because state cant be changed, just replace the old one with a new onw
			// let removeIndex = state
			// 	.map(function(item) {
			// 		return item.id;
			// 	})
			// 	.indexOf(action.id);
			// console.log(removeIndex);
			// ~removeIndex && state.splice(removeIndex, 1); //(removeIndex >= 0) && array.splice(removeIndex, 1);
			return state.filter(reminder => reminder.id !== action.id);//this function does not change the original state
		}
		case DELETE_REMINDER_ALL: {
			return [];
		}
		default:
			return state;
	}
};

export default reminder;
