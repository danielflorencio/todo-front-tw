import { Todo } from "@/types/todoItem";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import EditTodo from "../EditTodo";
import { useTodosStore } from "@/store";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { TodoMode } from "@/types/mode";
import { showDescriptionText } from "@/helpers/showDescriptionText";
export default function TodoItem({todo}: {todo: Todo}){

    const toggleTodoMode = useTodosStore((state) => state.toggleTodoMode);
    const toggleTodoState = useTodosStore((state) => state.toggleTodoState);
    const deleteTodo = useTodosStore((state) => state.deleteTodo);

    return(
        <div className="flex px-2 py-2 gap-3 w-full max-w-full items-center border-b border-purple-400">
            <div className="flex items-center gap-2 w-24 justify-center">
                <FaTrash size={20} className="text-red-600 hover:text-red-800 cursor-pointer" onClick={() => deleteTodo(todo.id)}/>
                {todo.mode === 'view' ? 
                    <FaEdit 
                    size={22} 
                    className="text-purple-400 cursor-pointer" 
                    onClick={() => toggleTodoMode(todo.id)}/> 
                : 
                    <IoCloseOutline 
                    size={22}
                    className="text-purple-400 cursor-pointer" 
                    onClick={() => toggleTodoMode(todo.id)}
                    />
                }
                {todo.done ? 
                    <MdOutlineCheckBox 
                    size={22}
                    className="text-green-500 hover:text-purple-400 cursor-pointer" 
                    onClick={() => toggleTodoState(todo.id)}/> 
                : 
                    <MdCheckBoxOutlineBlank 
                    size={22}
                    className="text-purple-400 hover:text-green-500 cursor-pointer" 
                    onClick={() => toggleTodoState(todo.id)}/>
                }
            </div>
            <div className={`${todo.done ? 'text-zinc-600' : ''} w-full font-semibold border border-white`} style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
                {todo.mode === TodoMode.VIEW ? showDescriptionText(todo.description) : <EditTodo id={todo.id}/>}
            </div>  
        </div>
    )
}

