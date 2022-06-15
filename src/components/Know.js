import React from 'react';
import image_1 from '../images/image_1.jpeg';
import image_2 from '../images/image_2.jpeg';
import './Know.css'
function Know() {
  return (
    <div>
      <h5 id="know2">PCOS is a common hormone disorder that can cause problems with your period, fertility, weight, and skin. It can also put you at risk for other conditions, such as type 2 diabetes. If you have it, the sooner you find out, the sooner you can start treatment.The exact cause of PCOS is not known. There is not even a best way to diagnose it too.But, here we came up with two tests to detect PCOS.Know the severity of PCOS in your body! by using the below options...</h5>
      <section>
       
        <img class="testing_image" src="https://media2.giphy.com/media/NiBqbZX2YmJusyxgeV/giphy.gif"></img>
 
        <div class="card" id="card1">
          <div class="card-header"> <b>Using Physical Parameters</b></div>
          <div class="card-body">Pcos has some common symptoms which will be seen in the women once PCOD developed in her body.Some of these symptoms are weight gain,facial hari growth,sleeping disorders and etc., Click the below button and fill the form shown next to detect the pcos and its level.</div>
          <div class="card-footer">
          <button class="btn btn-outline-secondary">Upload clinical values...</button>
          </div>
        </div>
        <div class="card" id="card1">
          <div class="card-header"> <b>Using Ultrasound Images</b></div>
          <div class="card-body">Generally the detection of PCOS is observed by using abdominal ultrasound scanning images of women.A normal ovary consists of 8-10 follicles from 2mm to 28mm in size . If somethings is abnormal than these values then those ovaries are subjected to PCOS.These will give more accurate results</div>
          <div class="card-footer">
          <button class="btn btn-outline-secondary">Upload Scanning Images...</button>
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4'>
            <b>Know the severity of PCOS!</b>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <br />
        <div className='row'>
          Select option via which you want to check the status (through uploading image or by values from the blood report).
        </div> */}
        </section>
        {/* <section>
        <br></br>
        <div className='row'>
          <button class="button_1">Upload ultrasound image</button>
          <br></br>
          <div class="row"></div>
                    <button className='button_1'>Upload clinical values...</button>
          
        </div>
        </section> */}
      
     
         </div>
    
  )
}

export default Know