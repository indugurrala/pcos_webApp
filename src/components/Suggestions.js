import React from 'react';
import './suggestions.css';
import image_1 from '../images/image_3.jpeg';
import image_2 from '../images/image_2.jpeg';
import image_yoga1 from '../images/image_yoga1.jpeg';
import image_yoga2 from '../images/image_yoga2.jpeg';
import period1 from '../images/periods1.jpeg';
import period2 from '../images/periods2.jpeg'

function Suggestions() {
  return (
    <div>
          <h2>Suggestions</h2>
          <div class="row">
            <img src={image_1} id="img1"></img>
            <img src={image_2} id="img2"></img>
          </div>
          <div id="hello">
            <h5 >We recommend using entire grains instead of white rice, such as brown rice, bajra, oatmeal, jowar, and ragi. It aids in the reduction of PCOD symptoms and the promotion of weight loss.
            </h5> 
            <h5 >
             <h4>1. Anti-Inflammatory Foods: </h4>
             Anti-inflammatory foods can help PCOS or PCOD sufferers feel better by reducing inflammation-related discomforts. As a result, our health experts advise including berries, fatty salmon, leafy green vegetables, and extra virgin olive oil in your PCOD diet.
            <h4>2. Fresh Fruits and Vegetables:</h4> Include fresh fruits and vegetables in your PCOD diet chart to add critical nutrients and fibre to your diet. Green leafy veggies are nutrient-dense and high in fibre. They also provide you with important B vitamins. We urge that you replace carbohydrate-rich snacks with healthy fresh fruits. This aids in the management of your finances.
            </h5>

        </div>
        <h2>Yoga</h2>
        <div class="row">
            <img src={image_yoga1} id="img1"></img>
            <img src={image_yoga2} id="img2"></img>
          </div>
          <div id="hello">
            <h5>
             <h4> 1. Bridge Pose or Setu Bandha Sarvangasana: </h4>
             These yoga asanas for PCOS helps in regulating thyroid function, which is crucially linked to PCOS. It relaxes and activates the organs in the abdominal region, thus relieving the symptoms of menopause.   
            <h4> 2. Sun Salutation or Surya Namaskar: </h4> 
            Surya namaskar is listed under the best yoga poses for PCOS. Weight loss, waist, and hip fat shedding, and menstrual cycle regulation can be facilitated by performing the sun salutation yoga pose every day.
            <h4> 3. Cobra Pose or Bhujangasana: </h4>
            Bhujangasan, or cobra pose, helps in making the body flexible and relieves stress. This pose is widely included in the list of yoga for PCOD problems.   
            <h4>  4. Breathing Exercise or Kapalbhati Pranayam:</h4>
            This one is primarily a breathing technique that focuses on reducing oxidative stress, improving blood circulation in the body, and balancing glandular output. It aids weight reduction by influencing the pancreas in a good way. This is why it is one of the most effective PCOD exercises.   
            </h5>

        </div>
        <h2>Home Remedies to Get Periods Regularly</h2>
        <div class="row">
            <img src={period1} id="img1"></img>
            <img src={period2} id="img2"></img>
          </div>
          <div id="hello">
            <h5>
             <h4> 1.Ginger tea is number one:  </h4>
             Ginger can help with a variety of ailments and symptoms, including irregular periods. Raw ginger can help you control your periods if you consume it on a regular basis. Ginger includes gingerol, which aids in the reduction of inflammation in the body. It aids in the contraction of uterine muscles and the maintenance of hormonal equilibrium. It standardises the occurrence of periods on a monthly basis. On an empty stomach in the morning or evening, drink a glass of hot ginger tea with a squeeze of lemon and a splash of honey to boost metabolism.
            <h4> 2.Papaya that isn't quite ripe: </h4> 
            The action of unripe papaya on irregular periods is well-known. It improves uterine contractions, which aid in the occurrence of periods. For a few months, drink unripe papaya juice on a regular basis, but not during your period.
            <h4> 3.Jaggery: </h4>
            Jaggery is a delicious substance with numerous therapeutic qualities. Consumption of jaggery on a regular basis may aid in the regulation of irregular periods. It also aids in the relief of uterine cramps.  
            </h5>

        </div>
      
     </div>
)
}

export default Suggestions