import React from 'react'
import { Container } from 'react-bootstrap'
import login_logo from '../images/login_logo.jpeg'
import pcosFull from '../images/pcosFull.jpg'
import pcos_goals from '../images/pcos-goals.png'
import stats from '../images/stats.jpg'
import pcos1jpg from '../images/pcos1jpg.jpg'
import './Home.css'
function Home() {
  return (
    <>
      <div className="container">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={login_logo} class="image1" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={pcosFull} class="image2"  alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={stats} class="image3" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={pcos_goals} class="image4" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={pcos1jpg} class="image5" alt="..."></img>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="row">
    <h3>What Causes PCOS?</h3>
    <div class="card">
      <header class="w3-container-w1-blue">
      <h5>Resistance to insulin</h5>
      </header>
      <div class="w3-container">
        <p>Insulin resistance occurs when the body's tissues are resistant to insulin's actions.
          As a result, the body must create 
          more insulin to compensate.
          High insulin levels cause the ovaries
           to release too much testosterone,
          preventing regular ovulation and 
          interfering with the formation of
           follicles (the sacs in the ovaries
          where eggs develop).</p>
      </div>
    </div>
    <div class="card">
      <header class="w3-container-w2-blue">
      <h5>weight and Lifestyle</h5>
      </header>
      <div class="w3-container">
        <p>PCOS can occur in both slender and overweight women. However, women with PCOS are at greater risk of being overweight or obese.The good news is that a healthy lifestyle of nutritious food and physical activity can help to treat PCOS and improve the symptoms.
</p>
      </div>
    </div>
    <div class="card">
      <header class="w3-container-w2-blue">
      <h5>Hormone imbalance</h5>
      </header>
      <div class="w3-container">
        <p>Certain hormones are reported to be out of balance in many women with PCOS, including:
increased levels of testosterone ,LH (luteinizing hormone),
Low sex hormone-binding globulin (SHBG), increased prolactin levels (only in some women with PCOS)</p>
      </div>
    </div>
    <div class="card">
      <header class="w3-container-w3-blue">
      <h5>Genetics</h5>
      </header>
      <div class="w3-container">
        <p>PCOS is a genetic condition that can run in families. If any of your relatives, such as your mother, sister, or aunt, have PCOS, your chances of having it are likely to be higher.
This shows that PCOS may have a hereditary component, albeit particular genes linked to the illness have yet to be discovered.</p>
      </div>
    </div>
</div>
<div class="row">
    <h3>PCOS Symptoms:</h3>
    <div class="card">
      <header class="w3-container-w1-blue">
      <h5>Irregular Periods</h5>
      </header>
      <div class="w3-container">
        <p>No periods, or periods that are: - irregular - infrequent - heavy Immature ovarian eggs that do not ovulate Multiple 'cysts' on the ovaries Difficulty becoming pregnant Some health challenges during pregnancy
        </p>
      </div>
    </div>
    <div class="card">
      <header class="w3-container-w2-blue">
      <h5>Hair, skin and body	</h5>
      </header>
      <div class="w3-container">
        <p>Excess facial and/or body hair (hirsutism) Scalp hair loss (alopecia) Acne on the face and/or body that can be severe Darkened skin patches (acanthosis nigricans) Weight gain
        </p>
      </div>
    </div>
    <div class="card">
      <header class="w3-container-w2-blue">
      <h5>Mental and emotional health</h5>
      </header>
      <div class="w3-container">
        <p>Mood changes Depression Anxiety Low self-esteem Poor body image Impact on quality of life</p>
      </div>
    </div>
    <div class="card">
      <header class="w3-container-w3-blue">
      <h5>Related health conditions</h5>
      </header>
      <div class="w3-container">
        <p>Sleep apnoea (a sleep disorder in which abnormal pauses of breathing occur during sleep) Increased risk of diabetes, with earlier onset Sexual health challenges Increased risk of cardiovascular disease.</p>
      </div>
    </div>
</div>
     </div>

    
      
    </>
    
  )
}

export default Home