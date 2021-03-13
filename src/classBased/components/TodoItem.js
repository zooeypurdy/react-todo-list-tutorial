import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  
	state = {
		editing: false
	}

	componentWillUnmount() {
		console.log("cool")
	}

	handleEditing = () => {
		this.setState({
			editing: true
		})
	}

	handleUpdateDone = event => {
		if (event.key === "Enter") {
			this.setState({ editing: false })
		}
	}
	
	render() {

		const { id, title, completed } = this.props.todo

		const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: 0.4,
			textDecoration: "line-through",
		}

		let viewMode = {}
		let editMode = {}

		if(this.state.editing) {
			viewMode.display = "none"
		} else {
			editMode.display = "none"
		}

    return(
        <li className={styles.item}>
					<div style={viewMode} onDoubleClick={this.handleEditing}>
            <input 
                type="checkbox" 
                checked={completed}
                onChange={() => {this.props.handleChangeProps(id)}}
								className={styles.checkbox}     
            />
            <button 
                onClick={() => {this.props.deleteTodoProps(id)} } 
            >Delete</button>
						<span style={completed ? completedStyle : null}>{title}</span>
					</div>
					<input 
						type="text" 
						value={title} 
						style={editMode} 
						className={styles.textInput} 
						onChange={e => {
    					this.props.handleUpdate(id, e.target.value)
  					}}
						onKeyDown={this.handleUpdateDone}
					/>
				</li>
    )
  }
}

export default TodoItem