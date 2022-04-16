import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incre} from '../action/action'

const axios = require('axios');

function Main() {
    const mystate= useSelector((s) => s.ch)

    const [task,settask]=useState({
        title:"",
        catageory:""
    })

    const dispatch = useDispatch()
    

    function taskk(e){
        const {value,name}=e.target

        settask({
            ...task,
            [name]:value
        })
    }

    const [list_taask,setlistask]=useState()

    function add(){
       
         
        
    }

    useEffect(() => {
        const token=JSON.parse(localStorage.getItem('token'))
        // console.log(token)
 
         axios.get(`http://localhost:8000/posts/${token.id}`)
         .then(function (response) {
            
      //  console.log("hello",response.data)
           
          //  dispatch(incre(response.data))
          setlistask(response.data)
           
         })
         .catch(function (error) {
           
           
         })
         .then(function () {
          // upnow()
         
 
         });
       
    }, [])
    
    function upnow(){

        console.log("ll",list_taask)
     
       
         var all_task_list=[] 
           all_task_list=list_taask.task
              all_task_list.push(task)
      


   
     console.log(all_task_list)
 const article = { 
     id:list_taask.id,
     name:list_taask.name,
     password:list_taask.password,
    task:all_task_list
    
  
 
 };
 console.log(article)
axios.put('http://localhost:8000/posts/1',article )
 .then(responsr=>{console.log(responsr)});
 
    }
 
  return (
    <div>
        <input placeholder='task name' name='title' onChange={taskk} />
        
        <input type='radio' name='catageory' value='todo' placeholder='todo' onChange={taskk} />
        <input type='radio' name='catageory' value='inprogress' placeholder='inprogress' onChange={taskk} />
        <input type='radio' name='catageory' value='done' placeholder='done' onChange={taskk} />
        <button onClick={upnow}>ADD</button>

    </div>
  )
}

export default Main