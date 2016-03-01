// Action Creators are where primary processing logic goes.
// They pass their results as simple inputs to the reducers

export const toggleTodo = (objectId) => {
    return{
        type: 'TOGGLE_TODO',
        objectId: objectId
    }
}

export const newTodo = (title, /*dueDate, dueTime,*/ listId) => {
    return{
        type: 'NEW_TODO',
        title: title,
        dueDate: "Sometime",
        dueTime: "1200",
        listId: listId
    }
}
