export interface ITodo {
    content: string,
    completed: boolean;
}

export interface ICurrentTab {
    tab: string,
    index: number
}

export interface ITab {
    value: string,
    id: string
}

export type ReduxMainStore = {
    todos: Array<ITodo>
}
