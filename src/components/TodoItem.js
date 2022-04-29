import React from 'react'
import Button from './Button'
import Input from './Input'

const TodoItem = ({ todo, handlePropsChange, deleteTodoProps }) => {
	return (
		<>
			<Input
				type='checkbox'
				name='checkbox'
				checked={todo.completed}
				onChange={() => handlePropsChange(todo.id)}
			/>
			<li>{todo.title}</li>
			<Button type='button' onClick={() => deleteTodoProps(todo.id)}>Delete</Button>
		</>
	)
}

export default TodoItem
