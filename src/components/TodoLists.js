import React from 'react'
import { connect } from 'react-redux'

// Import Action Creators
import { toggleTodo } from '../actions/main'
import { newTodo } from '../actions/main'

// Variables
var input

// Main Body
const statusText = (status) => {
    if( status == true ) return "✔"
    else return ""
}

const sumTasks = (objects) => {
    return objects.length
}

const sumComplete = (objects) => {
    let sum = 0
    objects.map( o => {
        if( o.complete ){ sum = sum + 1 }
    })
    return sum
}

const TodoLists = ({
    // Variables from 'mapStateToProps'
    objects,
    filters,
    count,
    completeCount,
    user,
    title,
    dispatch

}) => (<div className="popout">

    <h2>{user}'s {title}</h2>

    <h4>Total Tasks: {count}</h4>
    <h4>Tasks Complete: {completeCount} </h4>

    <div>{filters.map( filter =>
        <div key={filter.title}
            className="popout">
            <h3>{filter.title}</h3>

            <table>
            <thead className="todoList">
                <tr>
                <td className="todoSerial">#</td>
                <td className="todoStatus">Status</td>
                <td className="todoTitle">Task</td>
                <td className="todoDate">Due Date</td>
                </tr>
            </thead>
            <tbody>
            {filter.tasks.map( task =>
                <tr key={objects[task].id} className={objects[task].complete.toString()}>
                    <td className="todoSerial">{objects[task].index}</td>
                    <td className="todoStatus button no-text-select"
                    onClick={e => {dispatch(toggleTodo(objects[task].id))}}>
                    {statusText(objects[task].complete)}</td>
                    <td className="todoTitle">{objects[task].title}</td>
                    <td className="todoDate">{objects[task].dueDate} @ {objects[task].dueTime}</td>
                </tr>
            )}
            </tbody>
            <tfoot></tfoot>
            </table>

            <form onSubmit={e => {
                // Prevent page reload on click/submit
                e.preventDefault()
                // If the todo has no title, don't do anything
                if (!newTitle.value.trim()) { return }
                // Dispatch the 'newTodo' function with the value of the input
                dispatch(newTodo(newTitle.value.trim()))
                // Reset the input's value to empty for a clean slate
                newTitle.value = ''
            }}>
            <table><tbody><tr>
                <td className="todoSerial"></td>
                <a type="submit"><td className="todoStatus button no-text-select">+</td></a>
                <td className="todoTitle" style={{
                    paddingTop: '0em',
                    paddingBottom: '0em'
                }}>
                    <input type="text" maxLength="32" name="newTitle"
                           placeholder="Task Name"
                           style={{
                               height: '100%',
                               width: '100%',
                               border: 'none',
                               height: '2em',
                               padding: '0.2em 0.1em',
                               margin: '0em'
                           }}
                    ref={text => {
                      input = text
                    }} />
                </td>
                <td className="todoDate"></td>

            </tr></tbody></table>
            </form>

        </div>
    )}</div>

</div> )
//

//
const mapStateToProps = (state, props) => {
    return {
        objects: state.objects,
        filters: state.filters,
        count: sumTasks(state.objects),
        completeCount: sumComplete(state.objects),
        title: props.title,
        //user: state.users[0].title
        user: "Mind Forker"
    }
}

export default connect(mapStateToProps)(TodoLists)
