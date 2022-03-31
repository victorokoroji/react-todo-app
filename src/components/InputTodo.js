import React, { Component } from 'react'
import Button from './Button'
import Input from './Input'

class InputTodo extends Component {
	state = {
		title: '',
	}

	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addTodoProps(this.state.title)
		this.setState({
			title: '',
		})
	}

	render({ title }) {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					type='text'
					placeholder='Add Todo...'
					name='title'
					value={title}
					onChange={this.handleInput}
				/>
				<Button type='button' >
					Submit
				</Button>
			</form>
		)
	}
}
export default InputTodo
