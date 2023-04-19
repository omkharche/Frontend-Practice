import React from 'react'

export default function MyTodo({todos, onDelete}) {
  return (
    <>
        <div className="container-fluid" style={{paddingLeft:'0px'}}>
            <br/>
            <h6>{todos.sno}</h6>
            <h5>{todos.title}</h5>
            <p>{todos.desc}</p>
            <button className="btn btn-danger btn-sm " onClick={()=>{onDelete(todos)}}>
                Delete
            </button>
        </div>      
    </>
  )
}
import React from 'react'

export default function MyTodo({todos, onDelete}) {
  return (
    <>
        <div className="container-fluid" style={{paddingLeft:'0px'}}>
            <br/>
            <h6>{todos.sno}</h6>
            <h5>{todos.title}</h5>
            <p>{todos.desc}</p>
            <button className="btn btn-danger btn-sm " onClick={()=>{onDelete(todos)}}>
                Delete
            </button>
        </div>      
    </>
  )
}
