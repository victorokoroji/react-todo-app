import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render({ todos, handlePropsChange, handleDelete }) {
		return (
			<ul>
				{todos.map(todo => {
					<TodoItem
						key={todo.id}
						todo={todo}
						handlePropsChange={handlePropsChange}
						handleDelete={handleDelete}
					/>
				})}
			</ul>
		)
	}
}

export default TodoList
