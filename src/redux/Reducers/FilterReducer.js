import { FILTER_TASK } from "../Actions/ActionTypes"

const initialState = {
    visibilityFilter : "All"
}

const filterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FILTER_TASK:
            return {
                ...state, visibilityFilter: payload
            }

        default: 
        return state
    }
}
export default filterReducer