import React from 'react'
import Button from './Button'
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
			<Button type='button'/>
		</>
	)
}

export default TodoItem
