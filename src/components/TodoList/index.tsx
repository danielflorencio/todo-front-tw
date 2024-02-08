'use client'
import { Todo } from "@/types/todoItem";
import TodoItem from "../TodoItem";
import { TodosState, useTodosStore } from "@/store";

export default function TodoList(){

    const todosData = useTodosStore((state: TodosState) => state.todos)
    
    return(
        <div className="flex flex-col gap-1">
            {todosData.map((todo: Todo, index: number) => <TodoItem todo={todo} key={index}/>)}
        </div>
    )
}