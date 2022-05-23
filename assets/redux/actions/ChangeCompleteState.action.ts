import { Action } from "redux";

interface IChangeAction extends Action {
    payload: {
        todoIndex: number
    }
}

export const ChangeCompletedState = (todoIndex: number): IChangeAction => {
    return {
        type: "CHANGE_COMPLETED_STATE",
        payload: {
            todoIndex
        }
    }
}