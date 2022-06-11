import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import {useForm} from 'react-hook-form';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';


function Tracker() {
  const current=new Date();
  const [startDate, setStartDate] = useState(current);
  const [count,setCount]=useState(0);
  const {register,handleSubmit,formState: {errors}}=useForm();

   function validate(event) {
    if(startDate.getTime()<current.getTime()){
      alert("select the future date")
    }
    else if(startDate.getTime()>=current.getTime()){
      setCount(startDate.getDate()-current.getDate())
    }
  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit(validate)}>  
       <hr></hr>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect/>
        <hr></hr>
        <button className="btn btn-primary" type="submit">Get the remaining days</button>  
        <hr></hr>
      </form>

      <button className='btn btn-danger'>When was your last day?</button> <hr></hr>
      <p>Your period is in {count} days</p>
    </Container>
    </>
  )
}

export default Tracker