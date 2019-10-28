import actions from './action';

const initialState = {
    listProduct: []
}

const Dashboard = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCT_SUCCESS: return {
            ...state,
            listProduct: action.data
        }
        default:
            return state;
    }
}

export default Dashboard;