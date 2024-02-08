import { todoItemData, todosData } from './data/todosData'
import { Todo } from './types/todoItem'
import { create } from 'zustand'
import { generateUUID } from './utils/uuidGenerator'
import { TodoMode } from './types/mode'

export interface TodosState {
    todos: Todo[],
    addTodo: () => void,
    deleteTodo: (id: string) => void,
    toggleTodoMode: (id: string) => void,
    toggleTodoState: (id: string) => void,
    changeTodoDescription: (id: string, description: string) => void
}

export const useTodosStore = create<TodosState>()((set) => ({
    todos: todosData,
    addTodo: () => set((state) => ({ todos: [...state.todos, {description: '', done: false, mode: TodoMode.EDIT, id: generateUUID()}] })),
    deleteTodo: (id: string) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    toggleTodoMode: (id: string) => set((state) => ({ todos: state.todos.map(todo => todo.id === id ? {...todo, mode: todo.mode === TodoMode.VIEW ? TodoMode.EDIT : TodoMode.VIEW} : todo) })),
    toggleTodoState: (id: string) => set((state) => ({ todos: state.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo) })),
    changeTodoDescription: (id: string, description: string) => set((state) => ({ todos: state.todos.map(todo => todo.id === id ? {...todo, description} : todo) })),
}))
    