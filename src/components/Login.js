import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import {userLogin} from '../slices/userslice';
import './Login.css'
import logo from '../images/logo.gif'
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
    <section>
        <div class="one">
            <img src={logo}></img>
        </div>
        <div class="two">
                          <div class="formBox">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onFormSubmit)}>              
                    <div class="inputBox">
                        <span>Username</span>
                        <input type="name" className="form-control" id="name" {...register("name")} />
            {errors.email && <span>This field is required</span>}
                                </div>
                    <div class="inputBox">
                        <span>Password</span>
                        <input type="password" className="form-control" id="password1" {...register("password")} />
            {errors.password && <span>this field is required</span>}      </div>
                    <div class="inputBox">
                    {isError && <p>Invalid Credentials</p>}
        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                    <div class="inputBox">
                        <p>Don't have an account? <a href="/">Sign Up</a></p>
                    </div>
                </form>
                </div>
            </div>
            

    </section>
    </>
  )
}

export default Login