import {Component} from "react"

class InputTodo extends Component {

    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.title.trim()) {
            this.props.inputTodoProps(this.state.title)
            this.setState({
                title: ""
            })
        }
        else {
            alert("please input something!")
        }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container" >
                <input 
                    name="title" 
                    type="text" 
                    placeholder="Write a To Do..." 
                    onChange={this.onChange} 
                    value={this.state.title} 
                    className="input-text" 
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }

}

export default InputTodo