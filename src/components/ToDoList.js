import React from 'react';

const ToDoList = ({todos,setToDos, seteditToDos}) => {
    const hendelcomplete =(todo) => {
        setToDos(
            todos.map(item => {
                if (item.id===todo.id){
                    return {...item, completed: !item.completed}
                }return item
            })
        )

    }

    const hendeldelete=({id})=>{
        setToDos(todos.filter(todo=>todo.id !== id))
    }
    const hendeledit=({id})=>{
        const findTodo = todos.find(todo =>todo.id === id)
        seteditToDos(findTodo)
    }


    return (
        <div>
            {todos.map(todo=>(
                <li className='list-item'
                key={todo.id}
                >
                    <input type="text"
                    value={todo.title}

                    className={"list ${todo.completed ? 'complete'}"}
                    onChange={event => event.preventDefault()}
                    />

                    <div>
                        <button className='button-complete task-button'
                        onClick={()=>hendelcomplete(todo)}
                        >complete</button>

                        <button className='button-edit task-button'
                        onClick={()=>hendeledit(todo)}
                        >edit</button>

                        <button className='button-delete task-button'
                        onClick={()=> hendeldelete(todo)}
                        >delete</button>

                    </div>
                </li>
            ))}

        </div>
    );
};

export default ToDoList;