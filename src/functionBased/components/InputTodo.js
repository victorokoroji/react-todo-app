import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import { FaPlusCircle } from 'react-icons/fa'

const InputTodo = ({ addTodoProps }) => {
	const [InputTitle, setTitle] = useState({
		title: '',
	})

	const handleInput = (e) => {
		setTitle({
			...InputTitle,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (InputTitle.title.trim()) {
			addTodoProps(InputTitle.title)
			setTitle({
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
				value={InputTitle.title}
				onChange={handleInput}
			/>
			<Button type='submit' className='input-submit'>
				<FaPlusCircle style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }} />
			</Button>
		</form>
	)
}

export default InputTodo
