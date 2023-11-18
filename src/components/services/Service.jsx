import React from 'react'
import './service.scss';
import { GiRoad } from 'react-icons/gi';
import { VscGraph } from 'react-icons/vsc';
import { HiFlag } from 'react-icons/hi';
const Service = () => {
  return (
    <div className='services'>
    <div className="service1">
        <div className='service-flex-column1'>
            <div className='bg-service-img'>
                <div><VscGraph /></div>
            </div>
        </div>
        <h3 className='service_flex_column2'>Free Delivery</h3>
        <div className='service-flex-column3'>Free Delivery on all order from
        with price more than $90.00</div>
    </div>
    <div className="service2">
        <div className='service-flex-column1'>
            <div className='bg-service-img'>
                <div><GiRoad /></div>
            </div>
        </div>
        <h3 className='service_flex_column2'>Money Gurantee</h3>
        <div className='service-flex-column3'>30 Days money back Gurantee
        no question asked</div>
    </div>
    <div className="service3">
        <div className='service-flex-column1'>
            <div className='bg-service-img'>
                <div><HiFlag /></div>
            </div>
        </div>
        <h3 className='service_flex_column2'>Online Support 24/7</h3>
        <div className='service-flex-column3'>We're here to support to you,
        Lets's shopping now!</div></div>
        </div>
  )
}

export default Service
