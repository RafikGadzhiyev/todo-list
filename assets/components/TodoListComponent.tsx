import { useSelector } from "react-redux";
import { ReduxMainStore } from "../types/Data.type";
import { ITodoListProps } from "../types/Props.type";
import { TodoList } from "./StyledComponents";
import { TodoComponent } from "./TodoComponent";

export const TodoListComponent: React.FC<ITodoListProps> = (props) => {
    const idGenerator = require('short-id');
    const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);

    return <TodoList>
        {store.todos.map((e, i) => {
            if (
                (props.currentTab.tab === 'Active' && e.completed) ||
                (props.currentTab.tab === 'Completed' && !e.completed)
            ) return;

            return <TodoComponent
                key={idGenerator.generate()}
                content={e.content}
                completed={e.completed}
                index={i}
            />
        }
        )
        }
    </TodoList>
}