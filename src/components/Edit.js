import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router';
import axios from 'axios';
import './Edit.css'
function Edit() {
    const navigate=useNavigate();
    const {register,handleSubmit,formState: {errors}}=useForm();
    const {userObj,isSuccess,isError,isLoading,errMsg}=useSelector(state=>state.user);
    const [users,setUsers]=useState([]);
    const onFormSubmit=(formObj)=>{
        
        formObj['name']=userObj.name;
        console.log(formObj)
        axios.get(`http://localhost:4000/detailapi/verify/${userObj.name}`)
        .then(response=>{
            console.log("response is ",response);
            //setUsers(response.data && response.data.name==userObj.name);
            if(response.data.message=="data present"){
                axios.put('http://localhost:4000/detailapi/update',formObj)
                .then(response=>console.log("response2: ",response.data.message))
                .catch(err=>console.log("Some error occurred in editing"))
            }
            else{
                axios.post('http://localhost:4000/detailapi/createdetails',formObj)
                .then(response=>console.log("user details created",response))
                .catch(err=>console.log("Some error occurred in creating user details"))
            }
        })
        .catch(
            err=>console.log("Error occurred in verifying")
        )
        }
    

  return (
    <>
    <Container>
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
            {/* <label htmlFor="name"></label> */}
            <input type="text" className="form-control" id="name" placeholder='Enter your occupation' {...register("occupation")} />
            
        </div>
        <div className="mb-3">
            {/* <label htmlFor="name"></label> */}
            <input type="text" className="form-control" id="age" placeholder='Enter your Age' {...register("age")} />
            
        </div>
        
        <div className="mb-3">
            {/* <label htmlFor="name"></label> */}
            <input type="text" className="form-control" id="weight" placeholder='Enter your Weight' {...register("weight")} />
            
        </div>
        <div className="mb-3">
            {/* <label htmlFor="name"></label> */}
            <input type="text" className="form-control" id="bmi" placeholder='Enter your BMI Index' {...register("bmi")} />
            
        </div>
        
        
        <div className="mb-3">
            {/* <label htmlFor="email" >Email</label> */}
            <input type="number" className="form-control" id="email" placeholder='Enter your average sleeping hours' {...register("sleeping")} />
        </div>
        
        <div className="mb-3">
            {/* <label htmlFor="password1">Password</label> */}
            <input type="number" className="form-control" id="password1" placeholder='Enter your average working hours' {...register("working")} />
        </div>
        <div className="mb-3">
            {/* <label htmlFor="period">Period</label> */}
            <input type="date" className="form-control" id="period" placeholder='Enter your last period date' {...register("period")} />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </Container>
    </>
  )
  }

export default Edit