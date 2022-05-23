import { Action } from 'redux'

interface IDeleteAction extends Action {
    payload: {
        todoIndex: number
    }
}

export const DeleteTodo = (todoIndex: number): IDeleteAction => {
    return {
        type: "DELETE_TODO",
        payload: {
            todoIndex
        }
    }
}

export const DeleteCompletedTodos = (): Action => {
    return {
        type: "DELETE_COMPLETED_TODOS"
    }
}