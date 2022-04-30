import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

const InputTodo = () => {
	const [title, setTitle] = useState('')

	const handleInput = () => {
		setTitle(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (title.trim()) {
			addTodoProps(title)
			setTitle('')
		} else {
			alert('Please write item')
		}
	}

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<Input
				type='text'
				className='input-text'
				placeholder='Add Todo...'
				name='title'
				value={title}
				onChange={handleInput}
			/>
			<Button type='submit' className='input-submit'>
				Submit
			</Button>
		</form>
	)
}

export default InputTodo
