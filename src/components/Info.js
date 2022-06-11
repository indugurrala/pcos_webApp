import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

function Info() {
  let {userObj,isSuccess,isError,isLoading,errMsg}=useSelector(state=>state.user);
  const [users,setUsers]=useState({})

  useEffect(()=>{
    console.log(userObj);
    const updateusers=(data)=>{
      console.log("data is ",data)
      setUsers(data)
    }
    axios.get(`http://localhost:4000/detailapi/getdetails/${userObj.name}`)
    .then(response=>{
      console.log(response)
      console.log(response.data.payload)
      if(response.data.payload!==undefined){
        updateusers(response.data.payload)
      }
    })
    .catch(err=>console.log("Error occurred in accessing details"))}
  ,[userObj])
  console.log(users)

  return (
    <div>
      <table className='table table-striped table-hover'>
        <tbody>
        <tr>
          <td>Name</td>
          <td>{users.name}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{users.age}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{users.weight} </td>
        </tr>
        <tr>
          <td>BMI Index</td>
          <td>{users.bmi} </td>
        </tr>
        <tr>
          <td>Occupation</td>
          <td>{users.occupation} </td>
        </tr>
        <tr>
          <td>Average sleeping hours</td>
          <td>{users.sleeping}</td>
        </tr>
        <tr>
          <td>Average working hours</td>
          <td>{users.working} </td>
        </tr>
        </tbody>
      </table>
      {/* <div style={{width:"150px",height:"150px",display:'flex',flexDirection:'column',marginTop:'500px'}}>
        <hr style={{width:'100%',height:'5px'}}/>
      </div> */}
    </div>
  )
}

export default Info