
import Todo from './Todo'
import '../css/todoList.css'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'


function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div>
      {todos && todos.map((item: TodoType) => (
        <Todo key={item.id} itemprops={item} />
       ))}
    </div>
  )
}

export default TodoList