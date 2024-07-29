
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";


interface Todoprops{
  itemprops: TodoType
}




function Todo({ itemprops }: Todoprops) {
  const { id, content, date } = itemprops;
  const dispatch = useDispatch();
  function removeFromList() {
    console.log(id);
    dispatch(removeTodo(id))
  }
  return (
    <div className='single-todo'>
      <div key={id}>{content} </div>
      
      <div className='icons'>
        <div style={{fontSize:'12px', marginRight:'15px'}}>{date.toString()} </div>
        <RiDeleteBin6Line onClick={removeFromList} style={{marginRight:'9px'}}/>
        <TiEdit/>
      </div>
    </div>
  )
}

export default Todo