import { createReducer } from "reduxsauce"
import toDoActionTypes from "./toDoActionTypes"

export const APP_INIT_STATE = {
    toDos: [],
    hideDoneTask: false,
}

const setToDOList = (state = APP_INIT_STATE, action) => {
    return { ...state, toDos: [...action.value, ...state.toDos] }
}

const hideDoneTask = (state = APP_INIT_STATE) => {
    return { ...state, hideDoneTask: !state.hideDoneTask }
}

const addToDO = (state = APP_INIT_STATE, action) => {
    return { ...state, toDos: [action.value, ...state.toDos] }
}

const editToDO = (state = APP_INIT_STATE, action) => {
    let tempToDOs = state?.toDos.map((toDo) => {
        if (toDo?.id == action?.value?.id) {
            return action?.value
        }
        return toDo
    })
    return { ...state, toDos: [...tempToDOs] }
}

const deleteToDO = (state = APP_INIT_STATE, action) => {
    let tempToDOs = state?.toDos.filter((toDo) => {
        return toDo.id !== action?.value
    })
    return { ...state, toDos: [...tempToDOs] }
}

const completeToDO = (state = APP_INIT_STATE, action) => {
    let tempToDOs = state?.toDos.map((toDo) => {
        if (toDo.id == action?.value) {
            return { ...toDo, completed: !toDo.completed }
        }
        return toDo
    })
    return { ...state, toDos: [...tempToDOs] }
}

const ACTION_HANDLERS = {
    [toDoActionTypes.SET_TODO_LIST
    ]: setToDOList,
    [toDoActionTypes.HIDE_DONE_TODO
    ]: hideDoneTask,
    [toDoActionTypes.ADD_TODO
    ]: addToDO,
    [toDoActionTypes.EDIT_TODO
    ]: editToDO,
    [toDoActionTypes.DELETE_TODO
    ]: deleteToDO,
    [toDoActionTypes.COMPLETE_TODO
    ]: completeToDO,
}

export default createReducer(APP_INIT_STATE, ACTION_HANDLERS);
