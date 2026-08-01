import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-120' src={assets.contact_img} alt="contact" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>555 Main Street <br /> Suite 100 ,NY ,USA</p>
            <p className='text-gray-500'>Tel: +1 (555) 019-2831 <br /> Email: contact@finisse.com</p>
            <p className='font-semibold text-xl text-gray-600'> Careers At Finisse </p>
            <p className='text-gray-500'>Learn more about our job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore</button>
          </div>
      </div>
      
      <NewsletterBox/>
    </div>
  )
}

export default Contact
