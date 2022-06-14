import React from 'react';
import './suggestions.css'
import image_1 from '../images/image_1.jpeg';
import image_2 from '../images/image_2.jpeg'
function Suggestions() {
  return (
    <div>
      <h2>Suggestions</h2>

      <section class="section_1">
    
     <div class="one">
         <img src={image_1}></img>
     </div>
     <div class="two">
         <p>We recommend using entire grains instead of white rice, such as brown rice, bajra, oatmeal, jowar, and ragi. It aids in the reduction of PCOD symptoms and the promotion of weight loss.
             Anti-Inflammatory Foods: Anti-inflammatory foods can help PCOS or PCOD sufferers feel better by reducing inflammation-related discomforts. As a result, our health experts advise including berries, fatty salmon, leafy green vegetables, and extra virgin olive oil in your PCOD diet.
             Fresh Fruits and Vegetables: Include fresh fruits and vegetables in your PCOD diet chart to add critical nutrients and fibre to your diet. Green leafy veggies are nutrient-dense and high in fibre. They also provide you with important B vitamins. We urge that you replace carbohydrate-rich snacks with healthy fresh fruits. This aids in the management of your finances.
         </p>
         <br></br>
         <p>PCOS/PCOD Dietary Recommendations:

             Carbohydrates easily enter our bloodstream and release energy. Your body fails to use glucose in PCOS or PCOD patients, resulting in a variety of health problems with your skin, hair, and ovaries. You gain weight as the glucose converts to fat. As a result, carbohydrates-rich diets may aggravate PCOD or PCOS symptoms. As a result, if you have PCOS, make sure you eat low-carb foods. So, as part of your polycystic ovarian syndrome diet plan, incorporate almonds, cauliflower, salmon, broccoli, seeds, and leafy greens.
             
             Wholegrain Foods and Cereals: Because wholegrain foods and cereals have a low GI, they're good for those with PCOS or PCOD. You may include something else.
         </p>
     </div>
     <div class="one">
         <img src={image_2}></img>
     </div>
 </section>
 </div>
)
}

export default Suggestions