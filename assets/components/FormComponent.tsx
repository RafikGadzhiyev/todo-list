import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddNewTodo } from '../redux/actions/CreateNewTodo.action';
import { IFormProps } from '../types/Props.type';
import { CreateTaskButton, CreateTaskForm, CreateTaskInput } from "./StyledComponents"

export const FormComponent: React.FC<IFormProps> = (props) => {
    const createFormRef = useRef<HTMLFormElement>();
    const dispatch: React.Dispatch<any> = useDispatch();

    const createNewTodo = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (createFormRef.current) {
            let todoInput: HTMLInputElement = (createFormRef.current.elements[0]) as HTMLInputElement;
            if (!todoInput.value) return;
            dispatch(AddNewTodo(todoInput.value));
            todoInput.value = '';
        }

    }

    return <CreateTaskForm
        isExists={props.currentTab.tab !== "Completed"}
        as={CreateTaskForm}
        ref={createFormRef}
    >
        <CreateTaskInput placeholder='Add todo...' />
        <CreateTaskButton onClick={(e: React.SyntheticEvent) => createNewTodo(e)}>Add</CreateTaskButton>
    </CreateTaskForm>
}