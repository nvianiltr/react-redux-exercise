export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const initialState = {
    countValue: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                countValue: state.countValue + 1
            };
        case DECREMENT:
            return {
                ...state,
                countValue: state.countValue - 1
            }
        default:
            return state;
    }
};

/* ACTION */
export const increment = () => {
    return (dispatch) => {
        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            });
        },3000);
    }
};

export const decrement = () => {
    return (dispatch) => {
        dispatch({
           type: DECREMENT
        });
    }
}