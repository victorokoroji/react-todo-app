import './App.css'

import React, { Component } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'
import { v4 as uuidv4 } from 'uuid'
class App extends Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: 'Setup development environment',
				completed: true,
			},
			{
				id: uuidv4(),
				title: 'Develop website and add content',
				completed: false,
			},
			{
				id: uuidv4(),
				title: 'Deploy to live server',
				completed: false,
			},
		],
	}

	handleChange = id => {
		this.setState(prevState => {
			return {
				todos: prevState.todos.map(todo => {
					if (todo.id === id) {
						return {
							...todo,
							completed: !todo.completed,
						}
					}
					return todo
				}),
			}
		})
	}

	delTodo = id => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id
				}),
			],
		})
	}

	addTodoItem = title => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		}
		this.setState({
			todos: [...this.state.todos, newTodo],
		})
	}

	render() {
		return (
			<div>
				<Header />
				{/* <InputTodo addTodoProps={this.addTodoItem} /> */}
				<TodoList
					todos={this.state.todos}
					handlePropsChange={this.handleChange}
					handleDelete={this.delTodo}
				/>
			</div>
		)
	}
}

export default App
