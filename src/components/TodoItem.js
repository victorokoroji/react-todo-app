import React, { Component } from 'react'
import Button from './Button'
import Input from './Input'
import styles from './TodoItem.module.css'

export class TodoItem extends Component {
	state = {
		editing: false,
	}

	handleEditing = () => {
		this.setState({
			editing: true,
		})
	}

	render() {
		const { todo, handlePropsChange, deleteTodoProps, setUpdate } = this.props
		const { completed, id, title } = todo

		let viewMode = {}
		let editMode = {}

		if (this.state.editing) {
			viewMode.display = 'none'
		} else {
			editMode.display = 'none'
		}

		const completedStyle = {
			fontStyle: 'italic',
			color: '#595959',
			opacity: 0.4,
			textDecoration: 'line-through',
		}

		return (
			<div>
				<li className={styles.item}>
					<div onDoubleClick={this.handleEditing} style={viewMode}>
						<Input
							type='checkbox'
							name='checkbox'
							className={styles.checkbox}
							checked={todo.completed}
							onChange={() => handlePropsChange(id)}
						/>
						<Button type='button' onClick={() => deleteTodoProps(id)}>
							Delete
						</Button>
						<span style={completed ? completedStyle : null}>{title}</span>
					</div>
					<input
						type='text'
						style={editMode}
						className={styles.textInput}
						value={title}
						onChange={e => setUpdate(e.target.value, id)}
						onKeyDown={this.handleUpdatedDone}
					/>
				</li>
			</div>
		)
	}
}

export default TodoItem
