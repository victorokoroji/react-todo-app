import React from 'react'
import Input from './Input'

const TodoItem = ({ todo, handleChangeProps }) => {
	return (
		<>
			<Input
				type='checkbox'
				name='checkbox'
				checked={todo.completed}
				onChange={() => handleChangeProps(todo.id)}
			/>
			<li>{todo.title}</li>
		</>
	)
}

export default TodoItem
