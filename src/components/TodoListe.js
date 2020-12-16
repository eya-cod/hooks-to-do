import React, { useState} from 'react'
import Todos from './Todos'

export default function TodoListe({todo, handleDelete, handleDone, handleEdit,handleCancel,handleOk}) {

    return (
        <div>
        {todo.map((el,index)=>{ return <Todos el={el} key={index} handleDelete={handleDelete} 
        handleDone={handleDone} 
        handleEdit={handleEdit} 
        handleCancel={handleCancel}
        handleOk={handleOk}
        />
         }   
           )}  
        </div>
    )
}
