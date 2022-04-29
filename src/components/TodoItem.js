import React from 'react'
import Input from './Input'

const TodoItem = ({ todo, handlePropsChange }) => {
	return (
		<>
			<Input
				type='checkbox'
				name='checkbox'
				checked={todo.completed}
				onChange={() => handlePropsChange(todo.id)}
			/>
			<li>{todo.title}</li>
		</>
	)
}

export default TodoItem
