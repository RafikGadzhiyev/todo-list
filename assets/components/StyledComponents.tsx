import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContentContainer = styled.div`
	width: 1000px;
	height: 100vh;
	margin: 0 auto;
`;

export const HeaderContent = styled.header`
	text-align: center;
	padding-block: 1rem;
`;

export const AppTitle = styled.h1``;

export const CreateTaskForm = styled(motion.form)`
width: 100%;
height: 40px;
display: flex;
align-items: center;
gap: 1rem;
margin-block: 1rem;
justify-content: space-between;
transition: 300ms ease;
`

export const CreateTaskInput = styled.input`
    width: 100%;
	border-radius: 5px;
	text-indent: .25rem;
	outline: none;
	border: 2px solid #bdbdbd;
	height: 100%;
	transition: 300ms ease;

	&:focus{
		border-color: #2F80ED;
	}

`;

export const CreateTaskButton = styled.button`
	border-radius: 10px;
	background: #2F80ED;
	width: 15%;
	height: 100%;
	color: white;
	text-align: center;
	transition: 300ms ease;

	&:hover{
		background: #2F60D0;
	}

`;

export const DeleteAllButton = styled.button`
	background: #EB5757;
	color: white;
	border-radius: 5px;
	padding: .5rem;
	margin-left: 85%;
	transition: 300ms ease;

	&:hover{
		background: red;
	}

`;

export const TodoList = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    max-height: 70vh;
    overflow: auto;
`

export const Todo = styled.li`
    display:  flex;
    aling-items: center;
    justify-content: space-between;
    padding: .5rem;
    border-radius: 5px;
    font-weight: 500;	

    input:checked ~ span{
        text-decoration: line-through;
    }

`

export const TodoContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const DeleteButton = styled.button`
    color: #ccc;
    transition: 200ms linear;

    &:hover{
        color: red;
    }

`

export const Tab = styled.li`
	width: 100%;
	display: flex;
	justify-content: center;
`;
export const TabButton = styled.button`
	width: 50%;
	text-align:center;
	padding: 1rem .5rem;
`;

export const TabList = styled.ul<{
	tabIndex: number
}>(({
	tabIndex
}) => `
	width: 100%;
	justify-content: space-between;
	list-style: none;
	display: flex;
	border-bottom: 2px solid #BDBDBD;
	position: relative;
		&::before{
			transition: 300ms ease-in;
			content: '';
			width: 25%;
			height: 5px;
			background: #2F80ED;
			border-radius: 5px 5px 0 0;
			position: absolute;
			bottom: -2px;
			left ${33.5 * tabIndex}%;
			transform: translateX(15%);
`);