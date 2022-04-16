import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './login.css'
const axios = require('axios');

function Login() {

    var page=useHistory()

    const [form,setform]=useState({

        user:"",
        password:""


    })

    function fill_form(e){
 
        const {name,value}=e.target
         
        setform({...form,
            [name]:value
        })

    }

    function login(){
        axios.get('http://localhost:8000/posts/')
        .then(function (response) {
           const alldata=response.data

           alldata.map(function(el){
               if(form.user==el.name && form.password==el.password){
                  localStorage.setItem('token',JSON.stringify(el))
                  page.push('/home')
                  
               }
           })
        
        })
        .catch(function (error) {
        
        })
        .then(function () {
         
        });
    }
   

  return (
    <div className='login_box'>

        <input placeholder='user' name='user' onChange={fill_form} />
        <input placeholder='password' name='password'  onChange={fill_form} />
        <button onClick={login}>Login</button>

    </div>
  )
}

export default Login