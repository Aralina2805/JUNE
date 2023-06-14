import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'
const Form = ({input, setInput, todos, setToDos, edittodos, seteditToDos}) => {
    const updateTodo =(title, id, completed)=>{
        const newToDo = todos.map(todo =>
        todo.id ===id ? {title, id, completed}: todo
        )
        setToDos(newToDo)
        seteditToDos('')
    }

    useEffect(()=>{
        if(edittodos) {
            setInput(edittodos.title);
        }else{
            setInput('')
        }
    }, [setInput,edittodos]
    )
    const onInputChange=(event)=>{
        setInput(event.target.value)
    }

    const onFormSubmit =(event)=>{
        event.preventDefault()
        if (!edittodos) {

            setToDos([...todos, {id: uuidv4(), title: input, completed: false}])
            setInput('')
        }else{
            updateTodo(input,edittodos.id,edittodos.completed)
        }

    console.log(todos)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Enter task"
            className="task-input"
            value={input}
            required
            onChange={onInputChange}
            />
            <button
            className='button-add'
            type ='submit'


            >
                {edittodos ? 'OK': 'Add'}
                </button>

        </form>

);

};

export default Form;