import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"


const InputTodo = props => {

	const [title, setTitle] = useState("")
	
	const onChange = e => {
		setTitle(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if(title.trim()) {
			props.inputTodoProps(title)
			setTitle("")
		} else {
			alert("Please input a To Do")
		}
	}

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<input 
				type="text"
				name="title"
				value={title} 
				onChange={onChange}
				className="input-text"
				placeholder="Write a To Do here..."
			/>
			<button className="input-submit">
				<FaPlusCircle 
					style={{ color: "darkcyan", fontSize: "26px", marginTop: "2", marginLeft: "42px" }} 
				/>
			</button>
		</form>
	)

}
 
export default InputTodo