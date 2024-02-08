import AddTodoButton from "@/components/AddTodoButton";
import TodoList from "@/components/TodoList";
import TodoTableHeader from "@/components/TodoTableHeader";

export default function HomePage(){
    return(
        <main className="flex justify-center md:px-8 flex-col w-full max-w-full px-2 py-2">
            <TodoTableHeader/>
            <TodoList/>
            <AddTodoButton/>
        </main>
    )
}