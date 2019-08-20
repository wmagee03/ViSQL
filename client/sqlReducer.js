// REDUCER FOR SQL ACTION FUNCTIONS

// import action creators
import * as types from './actionTypes.js';

const initState = {
    DB: {},
    Tables: {},
    Table_Schemas: {},
    Saved: true,
};

const SQLReducer = (state = initState, action) => {

    switch(action.type) {
        case types.ADD_DB:
            const newDB = state.DB;
            newDB[action.payload] = [];

            return {
                ...state,
                newDB,
            };
            
        default:
            return initState;
    }

};