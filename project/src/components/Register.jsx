import {React} from 'react'
import { Link } from 'react-router-dom'
import{useState} from 'react'
// import"../css/Page.css"
import '../css/page11.css'
import axios from 'axios'
import { Div } from './Container'
import {Forms} from './Form'
import '../css/register.css'
function Register() {

  const[user,setuser] = useState({
    username : "",
    email : "",
    password:""

  })

  const {username,email,password} = user;

  const inputchange = (e) =>{
    
  setuser({
    ...user,[e.target.name]:e.target.value
  })
  };

  // const submit = async  e =>{
  //   e.preventDefault();
  //   const response = await fetch('http://localhost:3001/register',{
  //     method :'POST',
  //     headers :{
  //        'Content-Type' :'application/json',
  //     },
  //     body :JSON.stringify({
  //       username,
  //       email,
  //       password,
  //     })
  //   })

  //   const data = await response.json();
  //   console.log(data)
  // }


  const submit = async e =>{
    e.preventDefault();
     await axios.post('http://localhost:3001/api/register',user)
     console.log(user)

  }


  return (
    <div >
    {/* onSubmit={e=>submit(e)} */}
        <Div>
        <img src="http://localhost:3000/Images/backarrow1.svg" id="arrow" alt="" id="arrow" />
      
        <div id="headinglog">Registration</div>
         <div id="formdiv">
         <Forms funct={submit} > 
         <input type="text" name="username" id="username" placeholder="username" value={username} onChange={e=>inputchange(e)}/><br/><br/>
         <input type="email" name="email" id="email" placeholder="email" value={email}  onChange={e=>inputchange(e)}/><br/><br/>
         <input type="text" name="password" id="password" placeholder="password" value={password}  onChange={e=>inputchange(e)}/><br/><br/>
        <input type="submit" id="submit" value="Signup"/>

         </Forms>
         </div>

         <p id="signpara">already have an account? <Link to="/login" id="signinlink">Sign in</Link></p>
         
        </Div>
        </div>
  )}
  

export { Register }