import { useTodosStore } from "@/store"

export default function EditTodo({id}: {id: string}) {

    const myTodo = useTodosStore((state) => state.todos.find((todo) => todo.id === id))
    const changeTodoDescription = useTodosStore((state) => state.changeTodoDescription)
    
    return <input 
    className="rounded px-1 bg-zinc-200 overflow-ellipsis w-full" 
    type='text' 
    placeholder="Write your todo" 
    value={myTodo ? myTodo.description : ''}
    onChange={(e) => changeTodoDescription(myTodo!.id, e.target.value)}
    />
}