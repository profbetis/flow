const filter = (state, action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'NEW_TODO':
            if( state.title == action.filterName ){
                return{ ...state, tasks: state.tasks.concat(action.id)}
            }
            else{ return state }

        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Create entry reducer function body with initial state and action input
const filters = (state = [], action) => {
    // Switch logic chooses what to execute based on the action type
    switch (action.type){
        case 'NEW_TODO':
            return(
                state.map( f => filter(f, action))
            )

        // Sets the new filters state to the entirety of the incoming data
        case 'PUSH_FILTERS': return(
            action.data
        )
        // In case nothing happens, just return the input (no action)
        default: return state
    }
}

// Set default export value to the entry function
export default filters
