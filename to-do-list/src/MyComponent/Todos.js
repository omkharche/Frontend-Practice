import React from 'react'
import MyTodo from './MyTodo'

export default function Todos({todos, onDelete}) {
  return (
    <>
        <div className="container">
            <h3 className='text-center my-3'>Todos List</h3>
            {todos.map((todos) => {
               return <MyTodo key={todos.sno} todos={todos} onDelete={onDelete} />
            })}
            
        </div>
    </>
  )
}
