import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import {userLogin} from '../slices/userslice'


function Login() {
    const {register,handleSubmit,formState: {errors}}=useForm();
    let {userObj,isSuccess,isError,isLoading,errMsg}=useSelector(state=>state.user);
    let dispatch=useDispatch();
    let navigate=useNavigate();
    const onFormSubmit=(usercredentials)=>{
        dispatch(userLogin(usercredentials));

    };

    useEffect(() => {
        if(isSuccess) {
            navigate("/home");
        }
        // console.log(isError)
        // console.log(errMsg)
        if(isError){
            //alert("Invalid credentials")
            console.log(isError)
        }
    }, [isSuccess, isError,isLoading,errMsg]);


  return (
    <>
    <Container>
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" >Name</label>
            <input type="name" className="form-control" id="name" {...register("name")} />
            {errors.email && <span>This field is required</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="password1">Password</label>
            <input type="password" className="form-control" id="password1" {...register("password")} />
            {errors.password && <span>this field is required</span>}
        </div> 
        {isError && <p>Invalid Credentials</p>}
        <button type="submit" className="btn btn-primary">Log In</button>
    </form>
    </Container>
    </>
  )
}

export default Login