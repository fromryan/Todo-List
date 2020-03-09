import React, { useState } from 'react';


const TodoList = () => {
    // let completed;
    const [state,setState] = useState({
        todo: "",
        todo_list: [],
        
    })

    const onChangeHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,  
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setState({
            todo_list: state.todo_list.concat(state.todo),
            todo:"",
        })
    }
  
    const onClickHandler = (e) => {
        setState({
            todo_list: state.todo_list.del(e.target.value),
        })
    }

    return (
        <div>
            <h1 className="lead display-4">To-Do List</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="todo" onChange={onChangeHandler}/>
                <input type="submit" value="Add"  className="btn btn-sm btn-secondary"/>
            </form>
        
            <div>
                <ul>
                    {state.todo_list.map((item,i) => (
                        <li key={i}>{item} <input type="checkbox"/><button className="btn btn-sm btn-primary" type="button" onClick={onClickHandler}>Delete</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
