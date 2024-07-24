
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";

function Todo() {
  return (
    <div className='single-todo'>
      <div>ben ilk</div>
      <div className='icons'>
        <RiDeleteBin6Line style={{marginRight:'9px'}}/>
       
        <TiEdit/>
      </div>
    </div>
  )
}

export default Todo