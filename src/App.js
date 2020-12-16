
import './App.css';

import React, {useState} from 'react'
import AddTodos from './components/AddTodos';
import TodoListe from './components/TodoListe';
function App() {
  const [todo,setTodo] = useState (
    [
      {nom:'ahmed',id:1, done:false, Edit:false}, 
      {nom:'zied',id:2, done:false, Edit:false}
      
    ]
  )
  const [text,setText]=useState ('');

  const handleAdd =(newtext)=>{
    setTodo([...todo, {nom:newtext , id:Date.now(), done:false ,Edit:false}]);

  }

  const handleDelete=(idtodo)=>{
    setTodo(todo.filter((el)=> (el.id!==idtodo) 

    ))
  }

  const handleDone=(idtodo)=> {
    setTodo(todo.map((el)=> (el.id===idtodo) ? {...el,done:!el.done} : el ) ) 
  }

  const handleEdit=(idtodo)=>{
  setTodo(todo.map((el)=> (el.id==idtodo)?{...el,Edit:!el.Edit}:el))
  }

  const handleCancel=(idtodo)=>{
    setTodo(todo.map((el)=>(el.id==idtodo)?{...el,Edit:!el.Edit}:el))
  }

  const handleOk=(idtodo,editedText)=>{
    setTodo(todo.map((el)=>(el.id==idtodo)?{...el,nom:editedText,Edit:!el.Edit}:el))
  }




  return (
    <div className="App">
      <AddTodos text={text} setText={setText} handleAdd={handleAdd}/>
      <TodoListe todo={todo} 
      handleDelete={handleDelete} 
      handleDone={handleDone} 
      handleEdit={handleEdit} 
      handleCancel={handleCancel}
      handleOk={handleOk}
      />
    </div>
  );
}

export default App;
