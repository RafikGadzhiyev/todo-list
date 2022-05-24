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
            const todos: Array<ITodo> = JSON.parse(localStorage.getItem("todos") + '') || [];
            return {
                todos: todos
            }
        case "CHANGE_COMPLETED_STATE":
            if (store && action.payload.todoIndex !== undefined) {
                let updatedValue: Array<ITodo> = store.todos.map((e: ITodo, i: number) => {
                    if (i === action.payload.todoIndex) {
                        e.completed = !e.completed;
                    }
                    return e;
                });

                updateStorage(updatedValue);
                return {
                    todos: updatedValue
                }
            }
            return {
                todos: store?.todos || []
            }
        case "DELETE_TODO": {
            if (store && action.payload.todoIndex !== undefined) {
                let updatedValue: Array<ITodo> = store.todos.filter((_, i: number) => i !== action.payload.todoIndex);

                updateStorage(updatedValue);
                return {
                    todos: updatedValue
                }
            }
            return {
                todos: store?.todos || []
            }
        }
        case "ADD_NEW_TODO":
            if (store && action.payload.todoContent !== undefined) {
                let updatedValue: Array<ITodo> = [
                    ...store.todos,
                    {
                        content: action.payload.todoContent,
                        completed: false
                    }
                ];

                updateStorage(updatedValue);
                return {
                    todos: updatedValue
                }
            }
        case "DELETE_COMPLETED_TODOS":
            let updatedValue: Array<ITodo> = (store?.todos.filter((e: ITodo) => !e.completed)) || [];

            updateStorage(updatedValue);
            return {
                todos: updatedValue
            }

        default:
            return store || { todos: [] }
    }
}

function updateStorage(updatedValue: Array<ITodo>) {
    localStorage.setItem('todos', JSON.stringify(updatedValue));
}