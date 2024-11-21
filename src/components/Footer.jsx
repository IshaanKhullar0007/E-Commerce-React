import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-2/3 text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolores modi labore odit rem! Id alias deserunt earum sequi labore numquam, officiis iure, facere asperiores ut quod quis ipsa veritatis libero quaerat.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='about'>
                <li>About Us</li>
                </Link>
                <Link to='/cart'><li>Delivery</li></Link>
                <Link to='/about'><li>Privacy Policy</li></Link>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-slate-600'>
                <li>+91 9877902283</li>
                <li>manan@gmail.com</li>
                <li>Instagram</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='text-center my-4 text-sm'>Copyright2024@ fancygarments.com - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
