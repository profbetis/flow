const object = (state, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'TOGGLE_TODO':
        if( state.id == action.objectId ){
            return { ...state, complete: !state.complete }
        }
        else{ return state }
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Entry reducer function body with initial state and action input
const objects = (state = [], action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'NEW_TODO': return(
            state.concat({
                id: action.id,
                title: action.title,
                complete: false,
                dueDate: action.dueDate,
                dueTime: action.dueTime
            })
        )

        case 'TOGGLE_TODO': return(
            state.map(o => object(o, action))
        )

        // Sets the object state branch to the entirety of the incoming data
        case 'PUSH_OBJECTS': return(
            action.data
        )

        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Set default export value to the reducer
export default objects
