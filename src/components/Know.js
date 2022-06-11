import React from 'react'

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
          <div className='col-sm-4'>
          <button className='btn btn-success'>Upload ultrasound image</button>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-sm-4'>
          <button className='btn btn-primary'>Upload clinical values...</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Know