import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
//pages
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
//components
import NavBar from "./NavBar"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
//styles
import "../App.css"

const TodoContainer = () => {

  const [todos, setTodos] = useState( getInitialTodos() )
	
	function getInitialTodos() {
		const temp = localStorage.getItem("Todos")
		const loadedTodos = JSON.parse(temp)
		return loadedTodos || []
	}

	useEffect(
		() => {
			const temp = JSON.stringify(todos)
			localStorage.setItem("Todos", temp)
		}, [todos]
	)


 const handleChange = id => {
    setTodos( prevState => {
        return {
            todos: prevState.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }
    })
  }


	const handleUpdate = (id, newTitle) => {
		setTodos( prevState => {
			return {
				todos: prevState.todos.map(todo => {
					if(todo.id === id) {
							todo.title = newTitle
					}
					return todo
				})
			}
		})
	}



  const deleteTodo = id => {
      setTodos([
				...todos.filter(todo => {
          return todo.id !== id
        })
			])
  }


	const addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

	

  return (
		<>
		<div>
			<NavBar />
		</div>
		<Switch>
			<Route exact path="/">
		    <div className="container">
		        <div className="inner">
		            <Header />
		            <InputTodo inputTodoProps = {addTodo} />
		            <TodosList 
									todos = {todos} 
									handleChangeProps = {handleChange} 
									deleteTodoProps = {deleteTodo} 
									handleUpdate = {handleUpdate}
								/>
		        </div>
		    </div>
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="*">
				<NotMatch />
			</Route>
		</Switch>
	</>
  )
}

export default TodoContainer