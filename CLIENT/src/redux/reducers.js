import { GET_TASKS, POST_TASKS,  } from './actions'
const initialState = {
    tasks: [],
    filters: [],
    diaria: [],
    semana: [],
    mensual: [],
    prioritarias: [],
}

export default function rootReducers(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                filters: action.payload
            }
        case POST_TASKS:
            return {
                ...state
            }
        default:
            return state;
    }
};