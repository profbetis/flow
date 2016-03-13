// Action Creators are where primary processing logic goes.
// They pass their results as simple inputs to the reducers

export const toggleTodo = (objectId) => {
    return{
        type: 'TOGGLE_TODO',
        objectId: objectId
    }
}

export const newTodo = (newId, title /*, dueDate, dueTime*/, filterName) => {
    return{
        type: 'NEW_TODO',
        id: newId,
        title: title,
        dueDate: "N/A",
        dueTime: "",
        filterName: filterName
    }
}
