import React from 'react'
import Button from './Button'
import Input from './Input'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, handlePropsChange, deleteTodoProps }) => {
	const completedStyle = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	}
	return (
		<>
			<li className={styles.item}>
				<Input
					type='checkbox'
					name='checkbox'
					className={styles.checkbox}
					s
					checked={todo.completed}
					onChange={() => handlePropsChange(todo.id)}
				/>
				<Button type='button' onClick={() => deleteTodoProps(todo.id)}>
					Delete
				</Button>
				<span style={this.props.todo.completed ? completedStyle : null}>
					{this.props.todo.title}
				</span>
			</li>
		</>
	)
}

export default TodoItem
