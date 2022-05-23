import { Action } from "redux";
import { ITab, ITodo, ReduxMainStore } from "../../types/Data.type";

interface ActionWithPayload extends Action {
    payload: {
        todoIndex?: number,
        todoContent?: string
    }
}

export const MainReducer = (store: ReduxMainStore | undefined, action: ActionWithPayload): ReduxMainStore => {
    switch (action.type) {
        case "__INIT__":
            return {
                todos: []
            }
        case "CHANGE_COMPLETED_STATE":
            if (store && action.payload.todoIndex !== undefined) {
                return {
                    todos: store.todos.map((e: ITodo, i: number) => {
                        if (i === action.payload.todoIndex) {
                            e.completed = !e.completed;
                        }
                        return e;
                    })
                }
            }
            return {
                todos: store?.todos || []
            }
        case "DELETE_TODO": {
            if (store && action.payload.todoIndex !== undefined) {
                return {
                    todos: store.todos.filter((_, i: number) => i !== action.payload.todoIndex)
                }
            }
            return {
                todos: store?.todos || []
            }
        }
        case "ADD_NEW_TODO":
            if (store && action.payload.todoContent !== undefined) {
                return {
                    todos: [
                        ...store.todos,
                        {
                            content: action.payload.todoContent,
                            completed: false
                        }
                    ]
                }
            }
        case "DELETE_COMPLETED_TODOS":
            return {
                todos: (store?.todos.filter((e: ITodo) => !e.completed)) || []
            }

        default:
            return store || { todos: [] }
    }
} 