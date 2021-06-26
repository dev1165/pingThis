import { call, takeLatest, put } from 'redux-saga/effects';
import { request } from '../utils/request';
// import { ActionTypes } from './constants';
import Axios from 'axios';
import {
    GET_INCIDENT_REQ,
    GET_INCIDENT_RES
} from './constant'


export function* fetchIncidents({ payload, callback }) {
    // console.log('hi', payload)
    const httpConfig = {
        url: 'https://s2k7tnzlhrpw.statuspage.io/api/v2/incidents.json',
        method: 'get',
        // data: payload,
        headers: {
            // 'Content-Type': 'application/json',
            // 'X-Partner-Id': config.HPCL_PARTNER_ID,
            // 'App-Version': 300,
        },
    };

    const response = yield call(request, httpConfig);
    // Axios.get(httpConfig)
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    // .then(function () {
    //     // always executed
    // });







    console.log(response, 'asgasgsaga')
    yield put({ type: GET_INCIDENT_RES, response });
}


export default function* incidentData() {
    yield takeLatest(GET_INCIDENT_REQ, fetchIncidents);
    // yield takeLatest(GET_PAYMENT_METHOD_REQ, fetchPaymentMethod);

}


// export function test() {
//     return function (dispatch) {
//         dispatch({ type: 'CHANGE_NAMEs', payload: 'e.target.value' })
//     }
// }