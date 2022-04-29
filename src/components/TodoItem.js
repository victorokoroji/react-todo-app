import React from 'react'
import Button from './Button'
import Input from './Input'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, handlePropsChange, deleteTodoProps }) => {
	return (
		<>
			<li className={styles.item}>
				<Input
					type='checkbox'
					name='checkbox'
					className={styles.checkbox}s
					checked={todo.completed}
					onChange={() => handlePropsChange(todo.id)}
				/>
				{todo.title}
				<Button type='button' onClick={() => deleteTodoProps(todo.id)}>
					Delete
				</Button>
			</li>
		</>
	)
}

export default TodoItem
