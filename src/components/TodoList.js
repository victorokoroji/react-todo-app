import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render() {
		const { todos, handlePropsChange, deleteTodoProps } = this.props
		return (
			<ul>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handlePropsChange={handlePropsChange}
						deleteTodoProps={deleteTodoProps}
					/>
				))}
			</ul>
		)
	}
}

export default TodoList
