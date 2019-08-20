// ACTION CREATORS //

// import action types
import * as types from './actionTypes.js.js';


// "ADD" Action Creators
export const addDB = (dbName) => ({ // dbName = String
    type: types.ADD_DB,
    payload: dbName,
});
export const addTable = (dbTableObj) => ({ // dbTableObj = Object containing dbName and tableName (with string values)
    type: types.ADD_TABLE,
    payload: dbTableObj,
});
export const addEntry = (tableEntryObj) => ({ // tableEntryObj = Object containing table field keys (with specified values)
    type: types.ADD_ENTRY,
    payload: tableEntryObj,
});


// "GET" Action Creators
export const getDB = (dbName) => ({ // dbName = String
    type: types.GET_DB,
    payload: dbName,
});
export const getTable = (tableName) => ({ // tableName = string
    type: types.GET_TABLE,
    payload: tableName,
});
export const getEntry = (entryIdx) => ({ // entryIdx = index that refers to an entry object (with specified keys/values)
    type: types.GET_ENTRY,
    payload: entryIdx,
});


// "EDIT" Action Creators
export const editDB = (newDBName) => ({ // newDBName = string
    type: types.EDIT_DB,
    payload: newDBName,
});
export const editTable = (newTableName) => ({ // newTableName = string
    type: types.EDIT_TABLE,
    payload: newTableName,
});
export const editEntry = (entryObj) => ({ // entryObj = object containing key to change and value to change it to (must follow schema)
    type: types.EDIT_ENTRY,
    payload: entryObj,
});


// "DELETE" Action Creators
export const deleteDB = (dbName) => ({ // dbName = String
    type: types.DELETE_DB,
    payload: dbName,
});
export const deleteTable = (tableName) => ({ // tableName = string
    type: types.DELETE_TABLE,
    payload: tableName,
});
export const deleteEntry = (entryIdx) => ({ // entryIdx = index that refers to an entry object (with specified keys/values)
    type: types.DELETE_ENTRY,
    payload: entryIdx,
});


// "GET ALL" Action Creators
export const getAllDB = () => ({
    type: types.GET_ALL_DB,
});
export const getAllTables = () => ({
    type: types.GET_ALL_TABLES,
});


// "SAVE" Action Creator
export const SAVE_DB = () => ({
    type: types.SAVE_DB,
});