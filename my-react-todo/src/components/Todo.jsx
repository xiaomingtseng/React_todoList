import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";
//MdDelete style 的 {{}}, 外層是代表用javascript語法,內層代表是一個object
function Todo({todo, deleteTodo, toggleCompleted, toggleEditing, editTodo}){
    return  todo.isEditing ? (
        <EditForm todo={todo} editTodo={editTodo}/>
    ) :(
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
        <p onClick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
        <div>
            <MdEdit onClick={() => {toggleEditing(todo.id)}} style={{cursor: 'pointer'}}/>
            <MdDelete onClick={() => {deleteTodo(todo.id)}} 
            style={{cursor: 'pointer', marginLeft: '5px'}}/> 
        </div>
    </div>
    )
}
export default Todo