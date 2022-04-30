import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

const InputTodo = ({ addTodoProps }) => {
	const [InputTitle, setTitle] = useState({
		title: '',
	})

	const handleInput = () => {
		setTitle({
			...InputTitle,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (InputTitle.title.trim()) {
			addTodoProps(InputTitle.title)
			setInputText({
				title: '',
			})
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
				value={InputTitle}
				onChange={handleInput}
			/>
			<Button type='submit' className='input-submit'>
				Submit
			</Button>
		</form>
	)
}

export default InputTodo
