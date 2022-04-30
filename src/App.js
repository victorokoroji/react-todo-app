import './App.css'

import React, { Component } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'
import { v4 as uuid } from 'uuid'
class App extends Component {
	state = {
		todos: [],
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

		localStorage.setItem('todos', JSON.stringify(this.state.todos))
	}

	setUpdate = (updatedTitle, id) => {
		this.setState(prevState => ({
			todos: prevState.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						title: updatedTitle,
					}
				}
				return todo
			}),
		}))
	}

	componentDidMount() {
		const todos = JSON.parse(localStorage.getItem('todos'))
		this.setState({ todos: todos })
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
						setUpdate={this.setUpdate}
					/>
				</div>
			</div>
		)
	}
}

export default App
