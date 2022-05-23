import { Action } from "redux";

interface ICreateAction extends Action {
    payload: {
        todoContent: string
    }
}

export const AddNewTodo = (todoContent: string): ICreateAction => {
    return {
        type: "ADD_NEW_TODO",
        payload: {
            todoContent
        }
    }
}
