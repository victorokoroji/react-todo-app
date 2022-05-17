import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render() {
		const { todos, handleChangeProps, deleteTodoProps, setUpdate } = this.props
		return (
			<ul>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleChangeProps={handleChangeProps}
						deleteTodoProps={deleteTodoProps}
						setUpdate={setUpdate}
					/>
				))}
			</ul>
		)
	}
}

export default TodoList
