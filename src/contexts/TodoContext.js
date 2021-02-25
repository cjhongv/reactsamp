import React, { useState, createContext, useEffect } from 'react'

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

	const [todos, setTodos] = useState(() => {
		const localData = localStorage.getItem('todos');
		return localData ? JSON.parse(localData) : [];
	});
	const [filterTodos, setFilterTodos]= useState(todos);

	const addTodo = (todo) => {
		setTodos([...todos, todo])
	}

	const toggleComplete = (id) => {
		const newTodo = [...todos];
		const todo = newTodo.find(todo => todo.id === id);
		todo.completed = !todo.completed;
		setTodos(newTodo);
	}

	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	const filterTodo = (action) => {
		switch (action) {
			case 'completed':
				setFilterTodos(todos.filter(todo => todo.completed === true));
				break;
			case 'uncompleted':
				setFilterTodos(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilterTodos(todos)
				break;
		}
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		setFilterTodos(todos)
	}, [todos])

	return ( 
		<TodoContext.Provider value={{ filterTodos, addTodo, toggleComplete, deleteTodo, filterTodo }}>
			{ props.children }
		</TodoContext.Provider>
	 );
}
 
export default TodoContextProvider;