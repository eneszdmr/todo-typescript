import { useDispatch } from 'react-redux'
import '../css/todoCreate.css'
import { useState } from 'react';
import { createTodo } from '../redux/todoSlice';




function TodoCreate() {

  const discpatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = () => {
    if (newTodo.trim().length === 0) { 
      alert('deger giriniz');
      return;
    }

    const payload = {
      id: Math.floor(Math.random() * 123456),
      content:newTodo
    }

    discpatch(createTodo(payload))
    setNewTodo('');
  }


  return (
    <div className='todo-create'>
      <input value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} placeholder='Todo Giriniz...' className='input' type='text' />
        <button onClick={handleCreateTodo} className='button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate