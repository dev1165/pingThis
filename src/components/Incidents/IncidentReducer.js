//Reducer for character information Initialize State
import { GET_INCIDENT_RES } from './constant'
import { fromJS } from 'immutable';

// const initState = {
//     name: "Sunny Xue",
//     occupation: "Ninja",
//     age: 16
// }

const initialState = fromJS({
    incident: {},

});
//Define Actions
const IncidentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INCIDENT_RES:
            return state.set('incident_method', action.response.data);

        default:
            return state;
    }
}

// export default appReducer;

export default IncidentReducer;