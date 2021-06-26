import { createSelector } from 'reselect';

export const incidentDataSelector = (state) => {
    // console.log(state)
    return {
        incident: state.incident
    };
}
// state.get('incident');
// console.log(state, 'devkant state')

// export const AppSelector = (state) => state.get('app');

export const incidentSelector = createSelector(
    incidentDataSelector,
    (payment) =>
        // console.log(payment, 'assadsds')
        payment.incident
    // }
);
// export const debitCreditCardSelector = createSelector(
//     PaymentSelector,
//     (payment) => payment.get('PAY_DC_CC')
// );
// export const otpSelector = createSelector(
//     PaymentSelector,
//     (payment) => payment.get('get_otp_res')
// );

// export const getDataFromAppState = (key) => createSelector(
//     AppSelector,
//     (app) => app.get(key)
// );



