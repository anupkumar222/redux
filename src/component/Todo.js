import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/action";


function Todo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.TodoReducer.list)

   const handleSubmit = (event) => {
        if(event.keyCode === 13) {
             dispatch(addTodo(input), setInput(''))
        }
    }

    return (
        <center className="container">
            <div className="main">
                <h1>Write your Todo here</h1>
                <div className="input">
                    <input
                        type="text"
                        value={input}
                        onChange={ (e) => setInput(e.target.value) }
                        onKeyDown={handleSubmit}
                    />
                    <span>
                        <button
                        onClick={ () => dispatch(addTodo(input), setInput("")) }
                        >
                            Enter
                        </button>
                    </span>
                </div>
  {/* list of todo */}
                {
                    list.map((task) => {
                        return (
                            <div className="list">       
                            <div className="task" key={task.id}>
                                {task.data}
                                </div>
                            <div
                            className="del"
                            onClick={() => dispatch(deleteTodo(task.id))}
                            >
                            🔚
                            </div>
                            </div>

                        )
                    })
                }
            </div>
            <div 
            className="remove"
            onClick={() => dispatch(removeTodo())}
            >Remove All</div>
        </center>
    )
}

export default Todo;