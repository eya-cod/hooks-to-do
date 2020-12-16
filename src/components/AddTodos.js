import React, { useState } from 'react'

export default function AddTodos({text, setText, handleAdd}) {
    const Add=(e)=>{
        e.preventDefault();
        handleAdd(text);
        setText ('')
    }
    return (
        <div>
            <h1>TO-DO List</h1>
            <form onSubmit={Add}>
            <input type='text' placeholder='add task' onChange={(e)=> setText(e.target.value)} value={text}  />
            <button onClick={Add} >Add</button>
            </form>
        </div>
    )
}
