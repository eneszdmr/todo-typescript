import '../css/todoCreate.css'

function TodoCreate() {
  return (
    <div className='todo-create'>
        <input placeholder='Todo Giriniz...' className='input' type='text'/>
        <button className='button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate