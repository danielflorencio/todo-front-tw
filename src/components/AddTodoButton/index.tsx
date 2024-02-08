'use client'
import { useTodosStore } from "@/store";
import { FaPlus } from "react-icons/fa";
export default function AddTodoButton(){
    const addTodo = useTodosStore((state) => state.addTodo);
    return <div onClick={addTodo} className="absolute bottom-4 right-4 md:bottom-16 md:right-16 bg-purple-500 px-4 py-4 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer"><FaPlus size={24} color="#ffffff"/></div>
}