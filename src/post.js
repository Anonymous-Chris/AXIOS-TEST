//post method
import React, { Component } from 'react'
import axios from './axios-order'

export class test extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
             userId:'',
             title:'',
             body:'',
             time:new Date().toLocaleTimeString(),
             date: new Date().toLocaleDateString()
             
        }
    }
    
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        
    }
    submitHandler=(event)=>{
        event.preventDefault()
      //  console.log(this.state)
        axios.post('/posts.json',this.state).then(res=>{
            console.log(res)
            window.location.reload(false)
        })
        
    }

    render() {
        const {userId, title,body}= this.state
        return (
            <div>
            <form>
            <div>
            <br/>
            <label>Student Id: </label><br/>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div><br/>
            <label>Name: </label>
            <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div><br/>
            <label>Course: </label>
            <div>
            <input type="text" name="body" value={body} onChange={this.changeHandler}/>
            </div>
            <button onClick={this.submitHandler}>Submit</button>
            </form>
            
            
            </div>
        )
    }
}

export default test




