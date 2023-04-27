import React from 'react'

export default function MyTodo(props) {
  return (
    <>
        <div className="container-fluid" style={{paddingLeft:'0px'}}>
            <br/>
            <h6>{props.todos.sno}</h6>
            <h5>{props.todos.title}</h5>
            <p>{props.todos.desc}</p>
            <button className="btn btn-danger btn-sm " onClick={()=>{props.onDelete(props.todos)}}>
                Delete
            </button>
        </div>      
    </>
  )
}

