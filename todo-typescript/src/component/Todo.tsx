
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import { useState } from "react";
import { format } from "date-fns";


interface Todoprops{
  itemprops: TodoType
}




function Todo({ itemprops }: Todoprops) {
  const { id, content, date } = itemprops;
  const dispatch = useDispatch();
  const updateDate = new Date()
  const formattedDate = format(updateDate, 'yyyy-MM-dd HH:mm:ss');
  const [editable, setEditable] = useState<Boolean>(false);

  const [newTodo, setNewTodo] = useState<string>(content);

  function removeFromList() {
 
    dispatch(removeTodo(id))
  }
 
  function handleUpdateTodo() {
    const payload = {
      id,
      content: newTodo,
      date :formattedDate
    }
    dispatch(updateTodo(payload))
    setEditable(false)
  }

  return (
    <div className='single-todo'>
      {editable ? <input style={{width:'250px', border:'none', borderBottom:'2px solid red', outline:'none'}}
        type="text" value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> :
        <div key={id}>{content} </div>}
     
      
      <div className='icons'>
        <div style={{fontSize:'12px', marginRight:'15px', opacity:'0.5'}}>{date.toString()} </div>
        <RiDeleteBin6Line onClick={removeFromList} style={{ marginRight: '9px' }} />
        
        {editable ? <FaCheckDouble onClick={handleUpdateTodo} /> :  <TiEdit onClick={()=> setEditable(true)} />}
        
      </div>
    </div>
  )
}

export default Todo