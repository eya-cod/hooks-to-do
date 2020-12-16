import React, { useState } from 'react'


export default function Todos({el , handleDelete, handleDone, handleEdit,handleCancel,handleOk}) {

    const [inputText, setInputText] = useState(el.nom);

    const Delett =(e)=>{
    e.preventDefault();
    handleDelete(el.id)
    }
    const cancel=(e)=>{
        e.preventDefault();
        handleCancel(el.id);
        setInputText(el.nom)
    }

    const Done =(e)=> {
        console.log('done')
        e.preventDefault();
        handleDone (el.id)
    }
    
    const edit=(e)=> {
        e.preventDefault();
        handleEdit(el.id);
    }
    const ok=(e)=>{
        e.preventDefault();
        handleOk(el.id,inputText)

    }

    return (
        (!el.Edit)  ? 
        <div>
            <h3 style={(el.done) ? {textDecoration:'line-through'} : {textDecoration:'none'}}>{el.nom}</h3>
            <button onClick={Delett}  >Delete</button>
            <button onClick={Done}  >{(el.done) ? 'Undo' : 'Done'}</button>
            <button onClick={edit}>Edit</button>
        </div> :
        <div> 
            <form onSubmit={ok}>
        <input onChange={(e)=> setInputText(e.target.value)} value={inputText} type='text'></input>
         <button onClick={cancel} >cancel</button> 
         <button  onClick={ok} >    Ok </button>
         </form>
       </div>
    )
}
