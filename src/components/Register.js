import React from 'react'
import { Container } from 'react-bootstrap';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router';
import axios from 'axios';
import './Register.css';

function Register() {
    const navigate=useNavigate();
    const {register,handleSubmit,formState: {errors}}=useForm();
    const onFormSubmit=(formObj)=>{
        console.log(formObj)
        if(formObj.password===formObj.confirm_password){
            axios.post('http://localhost:4000/userapp/createuser',formObj)
            .then(response=>{
                console.log(response);
                alert(response.data.message)
                if(response.data.message=="new user created"){
                    navigate("/login")
                }
            })
            .catch(
                err=>alert("Error occurred in sending data")
            )
        }
        else{
            alert("passwords are not matched");
        }  
    }

  return (
    <>
    <Container>
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" {...register("name",{required:true})} />
            {errors.name && <span>This field is required</span>}
        </div>
        
        <div className="mb-3">
            <label htmlFor="email" >Email</label>
            <input type="email" className="form-control" id="email" {...register("email")} />
        </div>
        
        <div className="mb-3">
            <label htmlFor="password1">Password</label>
            <input type="password" className="form-control" id="password1" {...register("password")} />
        </div>
        <div className="mb-3">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" className="form-control" id="password2" {...register("confirm_password")} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div clasName='alternate'>
    <p>Already have an account?<a href="/login">Login</a></p>
    </div>
    </Container>
    </>
  )
}

export default Register