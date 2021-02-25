import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';

const Todo = ({ todo }) => {

	const { toggleComplete, deleteTodo } = useContext(TodoContext);

	const hanleDelete = ({ id, target }) => {
		target.className = 'todo fall';
		setTimeout(() => {
			deleteTodo(id)
		}, 500);
	}

	return ( 
		<div className="todo" className={todo.completed ? 'todo completed' : 'todo'}>
			<li className="todo-item">{todo.title}</li>
			<button onClick={() => toggleComplete(todo.id)} className="complete-btn"><i className="fa fa-check"></i></button>
			<button onClick={(e) => hanleDelete({id: todo.id, target: e.target.parentNode})} className="trash-btn"><i className="fa fa-trash"></i></button>
		</div>
	 );
}
 
export default Todo;