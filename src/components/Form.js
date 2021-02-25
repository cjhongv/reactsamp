import React, { useContext, useState, useRef } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { TodoContext } from '../contexts/TodoContext';
import uuid from 'uuid/dist/v1';

const Form = () => {

	const { addTodo, filterTodo } = useContext(TodoContext);
	const [title, setTitle] = useState('');
	const inputEl = useRef(null);
	const dropInput = useRef('all');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputEl.current.value !== '' && inputEl.current.value !== null) {
			const todo = { title, id: uuid(), completed: false }
			addTodo(todo);
			setTitle('');
			inputEl.current.focus();
		} 
	}

	const handleFilter = () => {
		filterTodo(dropInput.current.value);
	}

	return ( 
		<>
		<form>
      <input ref={inputEl} type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="todo-input" />
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select ref={dropInput} onClick={handleFilter} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
		</>
	 );
}
 
export default Form;