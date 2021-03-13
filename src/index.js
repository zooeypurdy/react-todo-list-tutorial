import { BrowserRouter } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer"

ReactDOM.render(
<React.StrictMode>
	<BrowserRouter >
  	<TodoContainer />
	</BrowserRouter>
</React.StrictMode>, 
document.getElementById("root")
)