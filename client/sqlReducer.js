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

    let DB
    let Tables;
    let Table_Schemas;
    switch(action.type) {
        case types.ADD_DB:
            DB = JSON.parse(JSON.stringify(state.DB));
            DB[action.payload] = [];

            return {
                ...state,
                DB,
            };
        
        case types.ADD_TABLE:
            DB = JSON.parse(JSON.stringify(state.DB));
            Tables = state.Tables.slice();
            Table_Schemas = JSON.parse(JSON.stringify(state.Table_Schemas));
            const table = [];

            if (DB[action.payload.dbName] === undefined) { return initState; }
            DB[action.payload.dbName].push(action.payload.tableName);
            Tables[action.payload.tableName] = [];

        default:
            return initState;
    }

};