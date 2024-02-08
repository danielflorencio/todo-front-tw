import { TodoMode } from "@/types/mode";
import { Todo } from "@/types/todoItem";
import { generateUUID } from "@/utils/uuidGenerator";

export const todoItemData: Todo = {
    description: 'I need to do something',
    done: false,
    mode: TodoMode.VIEW,
    id: '0'
}

export const todosData: Todo[] = [
    {... todoItemData, id: generateUUID()},
    {...todoItemData, id: generateUUID()},
    {...todoItemData, id: generateUUID()},  
];