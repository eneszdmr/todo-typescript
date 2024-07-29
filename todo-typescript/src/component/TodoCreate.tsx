import { useDispatch } from 'react-redux'
import '../css/todoCreate.css'
import { useState } from 'react';
import { createTodo } from '../redux/todoSlice';
import { format } from 'date-fns';



function TodoCreate() {

  const discpatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreateTodo = () => {
    if (newTodo.trim().length === 0) { 
      alert('deger giriniz');
      return;
    }

    const date = new Date()
    const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
    const payload = {
      id: Math.floor(Math.random() * 123456),
      content: newTodo,
      date :formattedDate
    }

    discpatch(createTodo(payload))
    setNewTodo('');
  }


  return (
    <div className='todo-create'>
      <input value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} placeholder='Todo Giriniz...' className='input' type='text' />
        <button onClick={handleCreateTodo} className='button' onKeyDown={e=>e.key==='Enter' ? handleCreateTodo:''}>Oluştur</button>
    </div>
  )
}

export default TodoCreate