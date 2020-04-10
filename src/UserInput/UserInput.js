// import React from 'react'

// const userInput = (props) =>{
//     return(
        
//         <input type="text" onChange={props.changed}/> 
        
//     )
// }

// export default userInput

import React, { Component } from 'react'

const UserInput = (props)=>(
    <div>
    User Id: {props.userId} 
    Title: {props.title}
    Body:{props.body}
    </div>
)

export default UserInput
