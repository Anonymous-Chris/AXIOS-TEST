
//get request
import React, { Component } from 'react'
import axios from './axios-order'
import UserInput from './UserInput/UserInput'
import * as ReactBootstrap  from 'react-bootstrap'
import './index.css'


class get extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        posts:[],
        time:new Date().toLocaleTimeString(),
        date:new Date().toLocaleDateString()
       }
   }
   
      
    componentDidMount(){
        axios.get('/posts.json').then((res)=>{
            console.log(res)
            const fetchedData = []
            for(let key in res.data){
                fetchedData.unshift({
                    ...res.data[key],
                    id:key
                })
            }
            this.setState({posts:fetchedData})
            console.log(this.state.posts)
        })

    }

logoutStudents(index){

    console.log(index)
    
    // fetch(('/posts'+index).json).then(res=>{
    //     console.log(res)
    // }) 
    if(window.confirm('Are you sure?')){
      const url ='/posts'
        axios.delete((`${url}/${index}.json`)).then(res=>{
            window.location.reload(false)
        })
        
      
       }
    }

    updateStudents(data){
        const url ='/posts'
        const index=data.id
        axios.put(`${url}/${index}.json`,{userId: 1234435675,body:data.body,title:data.title,time:data.time,date:data.date}).then(res=>{
           
           console.log(res)
           window.location.reload(false)
        })
    }


//  renderStudents=({data=[...this.state.posts]})=>{
//     return(
//         <tr key={data.id}>
//         <td>{data.userId}</td>
//         <td>{data.title}</td>
//         <td>{data.body}</td>
//         <td>{data.time.toLocaleTimeString()}</td>
//         </tr>
//     )
//  }

 
    render() {
        

   
        return (
            <div>
    
            
         <table className="table">
         <thead>
         <tr>
         <th className="th">Student Id</th>
         <th className="th">Name</th>
         <th className="th">Course</th>
         <th className="th">Time Input</th>
         <th className="th">Date</th>
         
         </tr>
         </thead>

         <tbody>
         {
             this.state.posts.map((row)=>(
                 <tr>
                 <td>{row.userId}</td>
                 <td>{row.body}</td>
                 <td>{row.title}</td>
                 <td>{row.time}</td>
                 <td>{row.date}</td>
                 <button onClick={()=>this.updateStudents(row)}>Update </button>
                 <button onClick={()=>this.logoutStudents(row.id)}>Logout</button>
                 
                 </tr>
             ))
         }
         </tbody>
         </table>
         
           
           </div>
        )
    }
}

export default get
