import './App.css'

import React, { Component } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'
import { v4 as uuid } from 'uuid'
class App extends Component {
	state = {
		todos: [
			{
				id: uuid(),
				title: 'Setup development environment',
				completed: true,
			},
			{
				id: uuid(),
				title: 'Develop website and add content',
				completed: false,
			},
			{
				id: uuid(),
				title: 'Deploy to live server',
				completed: false,
			},
		],
	}

	handleChange = id => {
		this.setState(prevState => ({
			todos: prevState.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			}),
		}))
	}

	delTodo = id => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)],
		})
	}

	addTodoItem = title => {
		const newTodo = {
			id: uuid(),
			title: title,
			completed: false,
		}

		this.setState({
			todos: [...this.state.todos, newTodo],
		})
	}

	render() {
		return (
			<div className='container'>
				<div className='inner'>
					<Header />
					<InputTodo addTodoProps={this.addTodoItem} />
					<TodoList
						todos={this.state.todos}
						handlePropsChange={this.handleChange}
						deleteTodoProps={this.delTodo}
					/>
				</div>
			</div>
		)
	}
}

export default App
