import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput]=useState('')
  const [todos, setToDos]=useState([])
  const [edittodos, seteditToDos]=useState(null)

  return (
    <div className="container">
     <div className="app-wrapper">
      <Header/>
       <Form
       input={input}
       setInput={setInput}
       todos={todos}
       setToDos={setToDos}
       edittodos={edittodos}
       seteditToDos={seteditToDos}
       />
       <ToDoList
        todos={todos}
        setToDos={setToDos}
        seteditToDos={seteditToDos}
       />
     </div>
    </div>
  );
}

export default App;
