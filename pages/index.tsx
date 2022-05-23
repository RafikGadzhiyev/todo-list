import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { ICurrentTab, ReduxMainStore } from '../assets/types/Data.type';
import { TabListComponent } from '../assets/components/TabsListComponent';
import { INIT } from '../assets/redux/actions/INIT.action';
import { DeleteCompletedTodos } from '../assets/redux/actions/DeleteTodo.action';
import { TodoListComponent } from '../assets/components/TodoListComponent';
import {
	ContentContainer,
	DeleteAllButton,
} from '../assets/components/StyledComponents';
import { HeaderComponent } from '../assets/components/HeaderComponent';
import { FormComponent } from '../assets/components/FormComponent';

import type { NextPage } from 'next'

const Home: NextPage = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);

	const [currentTab, setCurrentTab] = useState<ICurrentTab>({
		tab: 'All',
		index: 0
	});

	useEffect(() => {
		dispatch(INIT());
	}, [])


	return (
		<ContentContainer>
			<Head>
				<title>Todo application</title>
				<meta name="description" content="Todo application using next.js and redux" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderComponent />
			<main>
				<div>
					<TabListComponent
						currentTab={currentTab}
						setCurrentTab={setCurrentTab}
					/>
					<FormComponent
						currentTab={currentTab}
					/>
				</div>
				<TodoListComponent
					currentTab={currentTab}
				/>
				{
					(currentTab.tab === 'Completed' && !!store.todos.filter(e => e.completed).length) &&
					<DeleteAllButton onClick={() => dispatch(DeleteCompletedTodos())}>Delete all</DeleteAllButton>
				}
			</main>
		</ContentContainer>
	)
}

export default Home
