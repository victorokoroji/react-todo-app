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
		if (this.state.title.trim()) {
			this.props.addTodoProps(this.state.title)
			this.setState({
				title: '',
			})
		} else {
			alert('Please write item')
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					type='text'
					placeholder='Add Todo...'
					name='title'
					value={this.state.title}
					onChange={this.handleInput}
				/>
				<Button type='button'>Submit</Button>
			</form>
		)
	}
}
export default InputTodo
