import React, { useState } from 'react'
import './App.css'
import Header from './functionBased/components/Header'
import { v4 as uuid } from 'uuid'
import TodoList from './functionBased/components/TodoList'

const App = () => {
	const [todos, setTodos] = useState([])

	const handleChange = id => {
		setTodos(prevState => {
			prevState.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !completed,
					}
				}
			})
		})
	}

	const addTodoItem = title => {
		const newTodo = {
			id: uuid(),
			title: title,
			completed: false,
		}

		setTodos([...todos, newTodo])
	}

	return (
		<div className='container'>
			<div className='inner'>
				<Header />
				<InputTodo addTodoProps={addTodoItem} />
				<TodoList
					todos={todos}
					handlePropsChange={handleChange}
					deleteTodoProps={this.delTodo}
					setUpdate={this.setUpdate}
				/>
			</div>
		</div>
	)
}

export default App

// import InputTodo from './functionBased/components/InputTodo'

// class App extends Component {

// 	handleChange = id => {
// 		this.setState(prevState => ({
// 			todos: prevState.todos.map(todo => {
// 				if (todo.id === id) {
// 					return {
// 						...todo,
// 						completed: !todo.completed,
// 					}
// 				}
// 				return todo
// 			}),
// 		}))
// 	}

// 	delTodo = id => {
// 		this.setState({
// 			todos: [...this.state.todos.filter(todo => todo.id !== id)],
// 		})
// 	}

// 	addTodoItem = title => {
// 		const newTodo = {
// 			id: uuid(),
// 			title: title,
// 			completed: false,
// 		}

// 		this.setState({
// 			todos: [...this.state.todos, newTodo],
// 		})
// 	}

// 	setUpdate = (updatedTitle, id) => {
// 		this.setState(prevState => ({
// 			todos: prevState.todos.map(todo => {
// 				if (todo.id === id) {
// 					return {
// 						...todo,
// 						title: updatedTitle,
// 					}
// 				}
// 				return todo
// 			}),
// 		}))
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.todos !== this.state.todos) {
// 			const temp = JSON.stringify(this.state.todos)
// 			localStorage.setItem('todos', temp)
// 		}
// 	}

// 	componentDidMount() {
// 		const temp = localStorage.getItem('todos')
// 		const loadedTodos = JSON.parse(temp)
// 		if (loadedTodos) {
// 			this.setState({
// 				todos: loadedTodos,
// 			})
// 		}
// 	}

// 	componentWillUnmount() {
// 		console.log('Cleaning up...')
// 	}
// }

// export default App
