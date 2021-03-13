import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"


const TodoItem = props => {  
	
	const [editing, setEditing] = useState(false)

		useEffect( 
			() => {
				return() => {
					console.log("Cleaning up...")
				}
			}, []
		)

	const handleEditing = () => {
		setEditing({
			editing: true
		})
	}

	const handleUpdateDone = event => {
		if (event.key === "Enter") {
			setEditing({ editing: false })
		}
	}

	const completedStyle = {
		fontStyle: "italic",
		color: "#595959",
		opacity: 0.4,
		textDecoration: "line-through",
	}

	const { id, title, completed } = props.todo

	let viewMode = {}
	let editMode = {}

	if(editing) {
		viewMode.display = "none"
	} else {
		editMode.display = "none"
	}

  return (
      <li className={styles.item}>
				<div style={viewMode} onDoubleClick={handleEditing}>
          <input 
              type="checkbox" 
              checked={completed}
              onChange={() => {props.handleChangeProps(id)}}
							className={styles.checkbox}     
          />
          <button 
              onClick={() => {props.deleteTodoProps(id)} } 
          >
						<FaTrash style={{ color: "orangered", fontSize: "16px" }} />
					</button>
					<span style={completed ? completedStyle : null}>{title}</span>
				</div>
				<input 
					type="text" 
					value={title} 
					style={editMode} 
					className={styles.textInput} 
					onChange={e => {
  					props.handleUpdate(id, e.target.value)
					}}
					onKeyDown={handleUpdateDone}
				/>
			</li>
  )
}

export default TodoItem