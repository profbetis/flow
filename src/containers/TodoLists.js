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

const sumTasks = (lists) => {
    let sum = 0
    lists.map( list => {
        sum = sum + list.tasks.length
    })
    return sum
}

const sumComplete = (lists) => {
    let sum = 0
    lists.map( list => {
        list.tasks.map( task => {
            if( task.complete ){ sum = sum + 1 }
        })
    })
    return sum
}

const TodoLists = ({
    // Variables from 'mapStateToProps'
    lists,
    title,
    count,
    completeCount,
    user,
    dispatch

}) => (<div className = "popout">

    <h2>{user}'s {title}</h2>

    <h4>Total Tasks: {count}</h4>
    <h4>Tasks Complete: {completeCount} </h4>

    <div>{lists.map( list =>
        <div key={list.id}
            className="popout">
            <h3>{list.title}</h3>

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
            {list.tasks.map( task =>
                <tr key={task.id} className={task.complete.toString()}>
                    <td className="todoSerial">{task.id}</td>
                    <td className="todoStatus button no-text-select"
                    onClick={e => {dispatch(toggleTodo(list.id, task.id))}}>
                    {statusText(task.complete)}</td>
                    <td className="todoTitle">{task.title}</td>
                    <td className="todoDate">{task.dueDate} @ {task.dueTime}</td>
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
        lists: state.lists.lists,
        title: props.title,
        count: sumTasks(state.lists.lists),
        completeCount: sumComplete(state.lists.lists),
        user: state.app.user
    }
}

const ConnectedTodoLists = connect(mapStateToProps)(TodoLists)

export default ConnectedTodoLists
