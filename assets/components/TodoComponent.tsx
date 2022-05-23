import { useDispatch } from "react-redux";
import { ChangeCompletedState } from "../redux/actions/ChangeCompleteState.action";
import { DeleteTodo } from "../redux/actions/DeleteTodo.action";
import { ITodoProps } from "../types/Props.type";
import {
    Todo,
    TodoContentContainer,
    DeleteButton,
} from "./StyledComponents";

export const TodoComponent: React.FC<ITodoProps> = (props) => {
    const dispatch: React.Dispatch<any> = useDispatch();

    return <Todo
    >
        <TodoContentContainer>
            <input type="checkbox" checked={props.completed} onChange={() => dispatch(ChangeCompletedState(props.index))} />
            <span            >
                {props.content}
            </span>
        </TodoContentContainer>
        <DeleteButton
            onClick={() => dispatch(DeleteTodo(props.index))}
        ><i className="bi bi-trash"></i></DeleteButton>
    </Todo>
}