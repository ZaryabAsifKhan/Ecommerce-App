import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
           <Link to='/'><img className='mb-5 w-32' src={assets.logo} alt="logo" /></Link>
            <p className='w-full md:w-2/3 text-gray-600'>
        Finesse is a fashion brand that offers a wide range of stylish and trendy clothing.
            </p>
             
        </div>
             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                   <Link to='/'> <li>Home</li> </Link>
                    <Link to='/about'> <li>About us</li> </Link>
                    <li>Delivery</li> 
                     <li>Privacy policy</li>

                </ul>
             </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1 (555) 019-2831</li>
                    <li>contact@finesse.com</li>
                </ul>
            </div>
      </div>

            <div>
            <hr/>
            <p className='py-5 text-sm text-center '>© 2026 Finesse. All rights reserved.</p>
            </div>

    </div>
  )
}

export default Footer
