import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './home.css'


function Home() {
    const axios = require('axios');
    const [userss,setusers]=useState([])
    const [list_task,setlist_task]=useState([])

    var page=useHistory()

    useEffect(() => {

        const token=JSON.parse(localStorage.getItem('token'))
        console.log(token)

        axios.get(`http://localhost:8000/posts/${token.id}`)
  .then(function (response) {
     
     setusers(response.data)
     setlist_task(response.data.task)
    
    
  })
  .catch(function (error) {
    
    
  })
  .then(function () {
  
  });
       
    }, [])
    console.log(userss.task)
     
 

  return (
    <div>
        <div className='sidebard'>
            <h3>Name:-{userss.name}</h3>
            <h3>Id:-{userss.id}</h3>
            <button>LOGOUT</button>
            <button onClick={()=>{page.push('/main')}} >ADD TASK</button>

        </div>
<div className='task_div'>

        <div className='task_box'>
          
          <h5>TODO</h5>
          {
          
          list_task.filter(e=>e.catageory=='todo').map(function(el){
            return(
            
            <div>
              <h4>{el.title}</h4>
            </div>
            
            )
          })

          }
        </div>

        <div className='task_box'>
          
          <h5>INPROGRESS</h5>
          {
          
          list_task.filter(e=>e.catageory=='inprogress').map(function(el){
            return(
            
            <div>
              <h4>{el.title}</h4>
            </div>
            
            )
          })

          }
        </div>
        <div className='task_box'>
          
          <h5>DONE</h5>
          {
          
          list_task.filter(e=>e.catageory=='done').map(function(el){
            return(
            
            <div>
              <h4>{el.title}</h4>
            </div>
            
            )
          })

          }
        </div>
        </div>
        
    </div>
  )
}

export default Home