import React from 'react';
import image_1 from '../images/image_1.jpeg';
import image_2 from '../images/image_2.jpeg'
function Know() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4'>
            <b>Know the severity of PCOS!</b>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <br />
        <div className='row'>
          Select option via which you want to check the status (through uploading image or by values from the blood report).
        </div>
        <br></br>
        <div className='row'>
          
          <button className='btn btn-success'>Upload ultrasound image</button>
          
                    <button className='btn btn-primary'>Upload clinical values...</button>
          
        </div>
      </div>
         </div>
    
  )
}

export default Know