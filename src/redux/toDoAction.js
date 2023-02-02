import toDoActionTypes from "./toDoActionTypes";

export const setToDOList = (value) => ({
    type: toDoActionTypes.SET_TODO_LIST,
    value
});

export const hideDoneToDOs = (value) => ({
    type: toDoActionTypes.HIDE_DONE_TODO,
});

export const addToDO = (value) => ({
    type: toDoActionTypes.ADD_TODO,
    value
});

export const editToDO = (value) => ({
    type: toDoActionTypes.EDIT_TODO,
    value
});

export const deleteToDO = (value) => ({
    type: toDoActionTypes.DELETE_TODO,
    value
});

export const markToDoDone = (value) => ({
    type: toDoActionTypes.COMPLETE_TODO,
    value
});


export const hideDoneToDo = (value) => ({
    type: toDoActionTypes.HIDE_DONE_TODO
});
