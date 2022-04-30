import React, { useState, useEffect } from 'react'
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
				return todo
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

	const delTodo = id => {
		setTodos([...todos.filter(todo => todo.id !== id)])
	}

	const setUpdate = (updatedTitle, id) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					todo.title = updatedTitle
				}
				return todo
			}),
		)
	}

	useEffect(() => {
		first
	
		return () => {
			second
		}
	}, [third])
	

	return (
		<div className='container'>
			<div className='inner'>
				<Header />
				<InputTodo addTodoProps={addTodoItem} />
				<TodoList
					todos={todos}
					handlePropsChange={handleChange}
					deleteTodoProps={delTodo}
					setUpdate={setUpdate}
				/>
			</div>
		</div>
	)
}

export default App


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
