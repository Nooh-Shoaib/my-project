// src/redux/reducers.js
import { SET_DATA, SET_ENTERPRISE_DATA, SET_LOADING } from "../ReduxToolKit/action";

const initialState = {
        data: {},
        enterpriseData: {},
        accordions: [],
        loading: true,
};

const reducer = (state = initialState, action) => {
        switch (action.type) {
                case SET_DATA:
                        return {
                                ...state,
                                data: action.payload,
                        };

                case SET_ENTERPRISE_DATA:
                        return {
                                ...state,
                                enterpriseData: action.payload,
                        };

                case SET_LOADING:
                        return {
                                ...state,
                                loading: action.payload,
                        };

                default:
                        return state;
        }
};

export default reducer;
