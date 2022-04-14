import React, {useState} from 'react';
import TodoHeader from './../TodoHeader/TodoHeader';
import TodoActions from './../TodoActions/TodoActions';
import TodoRender from './../TodoRender/TodoRender';
import './Todo.css';

const initialFormData = {
  isEdit: false,
  todoName:'',
  text:'',
  isDone: false,
  id: '',
  index: null
}

const Todo = ()=>{
  const [tab, setTab] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDisplay, setIsOpenDisplay] = useState(false)
  const [todos, setTodos] = useState([]) 
  const [formData, setFormData] = useState(initialFormData)

  const handleOpenDialog = () => setIsOpen((prev)=>!prev)

  return (
    <div className='todo-wrapper'>
      <TodoHeader />

      <TodoActions />

      <TodoRender />
    </div>
  )
}

export default Todo;