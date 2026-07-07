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

        </div>

      </div>

    </div>
  )
}

export default About
