import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
	const { completed, id, title } = todo

	const [editing, setEditing] = useState(false)

	const handleEditing = () => {
		setEditing(true)
	}

	const handleUpdatedDone = event => {
		if (event.key === 'Enter') {
			setEditing(false)
		}
	}

	const completedStyle = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	}

	let viewMode = {}
	let editMode = {}

	if (editing) {
		viewMode.display = 'none'
	} else {
		editMode.display = 'none'
	}

	return (
		<li className={styles.item}>
			<div onDoubleClick={handleEditing} style={viewMode}>
				<Input
					type='checkbox'
					className={styles.checkbox}
					checked={completed}
					onChange={() => handleChangeProps(id)}
				/>
				<Button onClick={() => deleteTodoProps(id)}>Delete</Button>
				<span style={completed ? completedStyle : null}>{title}</span>
			</div>
			<Input
				type='text'
				style={editMode}
				className={styles.textInput}
				value={title}
				onChange={e => {
					props.setUpdate(e.target.value, id)
				}}
				onKeyDown={handleUpdatedDone}
			/>
		</li>
	)
}

export default TodoItem
