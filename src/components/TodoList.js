import Todo from "./Todo"
import React, { useContext } from 'react'
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {

	const { filterTodos } = useContext(TodoContext);

	return ( 
		<>
		<div className="todo-container">
      <ul className="todo-list">
				{filterTodos.map(todo => (<Todo key={todo.id} todo={todo} />))}
			</ul>
    </div>
		</>
	 );
}
 
export default TodoList;