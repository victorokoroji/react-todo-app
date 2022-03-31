import React, { Component } from 'react'
import Button from './Button'
import Input from './Input'
class TodoItem extends Component {
  render() {
    const { todo, handlePropsChange, handleDelete } = this.props
		return (
			<li>
				<Input
					type='checkbox'
					checked={todo.completed}
					onChange={() => handlePropsChange(todo.id)}
				/>
				{todo.title}
				<Button type='button' onClick={() => handleDelete(todo.id)}>
					Delete
				</Button>
			</li>
		)
	}
}

export default TodoItem
