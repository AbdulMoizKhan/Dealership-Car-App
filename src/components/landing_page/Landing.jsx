import React from 'react'
import './landing.css'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';
import curve from '../../assets/curve.svg'

const Landing = () => {
    return (
        <div className='landing'>
            <div className='text'>
                <div className='heading1'>
                    <div className='minus_logo'><AiOutlineMinus /></div>
                    <div className='welcome'>Welcome to our website</div>
                </div>
                <div className='heading2'>Grab the Best Quality <br /> Car's with Us</div>
                <div className='detail_website'>Discover Excellence in Every Ride! Grab the Best Quality Cars with Us.
                 Explore a curated selection of brand new, top-tier vehicles in Pakistan. We offer a seamless
                  buying experience, ensuring you find the perfect car for your needs. Your dream car is just 
                  a click away.</div>
                <div className='heading3'>
                    <button className='button_shop'>
                    <div className='shop_now'>Shop Now</div> 
                    <div className='show_nowlogo'><HiArrowNarrowRight /></div>
                    </button></div>
            </div>
            <div className='picture'>
                <img src="curve.svg" alt="" />
            </div>
        </div>
    )
}

export default Landing
