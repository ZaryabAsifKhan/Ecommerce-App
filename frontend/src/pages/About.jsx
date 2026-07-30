import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className = 'text-2xl text-center pt-8 border-t'>
        <Title text1 = "ABOUT" text2 = "US" />
      </div>

      <div className = 'my-10 flex flex-col md:flex-row gap-16'>
        <img className = 'w-full md:max-w-112.5' src={assets.about_img} alt="about" />
        <div className = 'flex flex-col justify-center gap-6 md:w-2/5 text-gray-600 '>
            <p>At FINESSE, we believe that style is a reflection of individuality, comfort, and effortless elegance. Born out of a passion for high-quality fashion, our brand is dedicated to curating versatile, modern pieces designed to elevate your everyday look.From cozy knitwear and chic essentials to timeless footwear and accessories, every item in our collection is carefully selected for its quality craftsmanship and effortless style. Whether you are dressing up for a special occasion or assembling a relaxed weekend outfit, FINESSE gives you the confidence to express your true self. </p>
<p>We curate thoughtful collections of apparel, footwear, and accessories designed to fit seamlessly into your everyday lifestyle. Combining high-quality fabrics with contemporary aesthetics, FINESSE is your go-to destination for elevated essentials.Thank you for letting us be a part of your style journey</p>
<p><b>Our Mission:</b> <br />To empower you with modern fashion that seamlessly combines comfort, quality, and timeless elegance</p>
        </div>
      </div>

      <div clasName ='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        
      </div>

    </div>
  )
}

export default About
