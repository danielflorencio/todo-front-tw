import { TodoMode } from "./mode"

export type Todo = {
    description: string,
    done: boolean,
    mode: TodoMode,
    id: string
}