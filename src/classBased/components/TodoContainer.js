import React from "react"
import "../App.css"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"

class TodoContainer extends React.Component {
  state = {
      todos: []
  }

	componentDidMount() {
		const temp = localStorage.getItem("Todos")
		const loadedTodos = JSON.parse(temp)
		if (loadedTodos) {
			this.setState({
				todos: loadedTodos
			})
		}
	}


	componentDidUpdate(prevProps, prevState) {
		if(prevState.todos !== this.state.todos) {
			const temp = JSON.stringify(this.state.todos)
			localStorage.setItem("Todos", temp)
		}
	}s


  handleChange = id => {
      this.setState( prevState => {
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

	handleUpdate = (id, newTitle) => {
		this.setState( prevState => {
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

  deleteTodo = id => {
      this.setState({
          todos: [
              ...this.state.todos.filter(todo => {
                  return todo.id !== id
              })
          ]
      })
  }

  addTodo = title => {
      const id = this.state.todos.length +1
      const newTodo = {
          id: id,
          title: title,
          completed: false
        }
      this.setState({
      todos: [...this.state.todos, newTodo]
      })
  }

  render() {
    return (
      <div className="container">
          <div className="inner">
              <Header />
              <InputTodo inputTodoProps = {this.addTodo} />
              <TodosList 
								todos = {this.state.todos} 
								handleChangeProps = {this.handleChange} 
								deleteTodoProps = {this.deleteTodo} 
								handleUpdate = {this.handleUpdate}
							/>
          </div>
      </div>
    )
  }
}

export default TodoContainer