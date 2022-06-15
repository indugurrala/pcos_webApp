import React,{useState} from 'react';
import Calendar from 'react-calendar'; 
//import './App.css';
import './Tracker.css';
import {useEffect} from 'react';
import axios from 'axios'


function Tracker() {
  const current=new Date();
  const [startDate, setStartDate] = useState(current);
  const [count,setCount]=useState(0);
  const [date, setDate] = useState(new Date())


  useEffect(()=>{
    axios.get('http:://localhost:4000/dateapi/getdate')
    .then(response=>console.log(response))
    .catch(err=>console.log("errorr",err))
})

  return (
    <div className='Tracker'>
      <div class="row">
        <div class="column">
        <h6>always forgetting your last period date?
          don't worry, we are here to remember it for you :D </h6>
            <h6>Please, select your last period range in the below calender</h6>
        </div>
        <div class="column">
        <Calendar onChange={setDate} value={date} selectRange={true}/>
        </div>
      </div>
      {date.getDate != current.getDate ? (
      <p id="select">
        <span>your Last period is from: </span>{' '} {date[0].toDateString()}
        &nbsp; to &nbsp;
        <span></span> {date[1].toDateString()}
        {30-current.getDate()+date[0].getDate()>0?<>
       <br></br> <span>Your next period is in </span>{30-current.getDate()+date[0].getDate()}
        </>:(
          <>
         <br></br>
         <span>you're period is late this month, take care to regularise your periods</span>
         </>
        )
}
      </p>
           ) : (
      <p>
        <span>Please select your last period date </span>{' '} 
      </p>
           )}
           <div class="row">
      <img src="https://www.verywellhealth.com/thmb/lKGFeFNj9oEOpNxT31BBKQxwhAw=/1501x1001/filters:no_upscale():max_bytes(150000):strip_icc()/reasons-you-missed-your-period-2757503-5b95dfc846e0fb00503dfde9.png" class="img_check1"></img>
      <img src="https://cdn.shopify.com/s/files/1/2130/4789/files/Fixed_Menstruation_Cycle.jpg" class="img_check2"></img>
      <img src="https://www.verywellfamily.com/thmb/W8vVYMKyE8yFR-78jEGp6VIo1P0=/1500x1000/filters:fill(D7DFF5,1)/what-is-an-irregular-period-1959924_final-52123064a2144e9d967a80a49cb615c5.jpg" class="img_check3"></img>
      
        </div> 
    </div>
     );
   }
   
   

// import React,{useState} from 'react'
// import DatePicker from "react-datepicker";
// import {useForm} from 'react-hook-form';
// import "react-datepicker/dist/react-datepicker.css";
// import { Container } from 'react-bootstrap';


// function Tracker() {
//   const current=new Date();
//   const [startDate, setStartDate] = useState(current);
//   const [count,setCount]=useState(0);
//   const {register,handleSubmit,formState: {errors}}=useForm();

//    function validate(event) {
//      if(startDate.getDay()>current.getDay()){
//       setCount(startDate.getDay()-current.getDay())
//      }
//     else if(startDate.getTime()<=current.getTime()){
//      setCount(current.getTime()-startDate.getTime)
//     }
//   }

//   return (
//     <>
//     <Container>
//       <form onSubmit={handleSubmit(validate)}>  
//        <hr></hr>
//        <h6>when was your last period?Select the date using below date picker</h6>
//         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
//         <hr></hr>
//         <label htmlFor="length">Cycle length</label>
//             <input type="Number" className="form-control" id="cycle_length" {...register("length")} />
//         <button className="btn btn-primary" type="submit"> <h6>check you next period</h6></button>  
//         <hr></hr>
//       </form>
//       <p>Your period is in {count} days</p>
//     </Container>
//     </>
//   )
// }

export default Tracker