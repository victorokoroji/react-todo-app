import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import styles from './TodoItem.module.css'
import { FaTrash } from 'react-icons/fa'

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps, setUpdate }) => {
	const { completed, id, title } = todo

	const [editing, setEditing] = useState(false)
	const [count, setCount] = useState(1)

	const handleEditing = () => {
		setCount(prevState => prevState + 1)
		if (count === 2) {
			setEditing(true)
		}
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
			<div onClick={handleEditing} style={viewMode}>
				<Input
					name='checkbox'
					type='checkbox'
					className={styles.checkbox}
					checked={completed}
					onChange={() => handleChangeProps(id)}
				/>
				<Button type='button' onClick={() => deleteTodoProps(id)}>
					<FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
				</Button>
				<span style={completed ? completedStyle : null}>{title}</span>
			</div>
			<Input
				type='text'
				style={editMode}
				className={styles.textInput}
				name='title'
				value={title}
				onChange={e => setUpdate(e.target.value, id)}
				onKeyDown={handleUpdatedDone}
			/>
		</li>
	)
}

export default TodoItem
