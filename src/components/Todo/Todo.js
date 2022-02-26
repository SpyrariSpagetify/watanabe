import React from 'react';
import TodoHeader from './../TodoHeader/TodoHeader';
import TodoActions from './../TodoActions/TodoActions';
import TodoRender from './../TodoRender/TodoRender';
import './Todo.css';


const Todo = ()=>{
  return (
    <div className='todo-wrapper'>
      <TodoHeader />

      <TodoActions />

      <TodoRender />
    </div>
  )
}

export default Todo;