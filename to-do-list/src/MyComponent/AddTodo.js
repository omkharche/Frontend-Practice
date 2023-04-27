import React from 'react'
import {useState} from 'react';

export default function AddTodo(props) {
    const [title , setTitle ] = useState("");
    const [desc , setDesc ] = useState("");
    const doSubmit = (e) => {
        e.preventDefault();
        if(!title || !desc)
        {   
            alert("Title and description can not be blank");
        }
        else
        {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <>  
        <div className="container">
            <form onSubmit={doSubmit}>
                <h3 className='text-center my-3'>Add Todo</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Discription</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success" >Submit</button>
            </form>
        </div>
    </>
  )
}
