import React from 'react'
import './popular.css'
import { GiCarWheel } from 'react-icons/gi';
import { FaMinus } from 'react-icons/fa6';
import Honda from '../../assets/Honda.jpg'
import Hyundai from '../../assets/Hyundai.jpg'
import Kia from '../../assets/Kia.jpg'
import toyota from '../../assets/toyota.jpg'
import suzuki from '../../assets/suzuki.jpg'
import MG from '../../assets/MG.jpg'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Element } from 'react-scroll';

const Popular = () => {

  return (
    <Element name='models'>
    <div className='category'>
      <div className="popularflex">
        <div className="head_popular">Popular Categories</div>
        <div className="icon_popular">
          <div className="minus1">
            <div className="minus_first"><FaMinus /></div>
            <div className="minus_secondone"><FaMinus /></div>
          </div>
          <div className="icon_wheel"><GiCarWheel /></div>
          <div className="minus1">
            <div className="minus_first"><FaMinus /></div>
            <div className="minus_secondtwo"><FaMinus /></div>
          </div>
        </div>
        <div className="car_shop">
          <div className="car1"><img className='car_img' src={toyota} alt="" />
            <div className='header_car'>
              <h1 className='car_head'>Toyota</h1>
              <button className='button_shop1'>
                <div className='shop_now1'>Shop Now</div>
                <div className='show_nowlogo1'><HiArrowNarrowRight /></div>
              </button>
            </div>
          </div>
          <div className="car2"><img className='car_img' src={suzuki} alt="" />
          <div className='header_car'>
              <h1 className='car_head'>Suzuki</h1>
              <button className='button_shop1'>
                <div className='shop_now1'>Shop Now</div>
                <div className='show_nowlogo1'><HiArrowNarrowRight /></div>
              </button>
            </div>
          </div>
          <div className="car3"><img className='car_img' src={Kia} alt="" />
          <div className='header_car'>
              <h1 className='car_head'>Kia</h1>
              <button className='button_shop1'>
                <div className='shop_now1'>Shop Now</div>
                <div className='show_nowlogo1'><HiArrowNarrowRight /></div>
              </button>
            </div>
          </div>
          <div className="car4"><img className='car_img' src={Honda} alt="" />
          <div className='header_car'>
              <h1 className='car_head'>Honda</h1>
              <button className='button_shop1'>
                <div className='shop_now1'>Shop Now</div>
                <div className='show_nowlogo1'><HiArrowNarrowRight /></div>
              </button>
            </div>
          </div>
          <div className="car5"><img className='car_img' src={MG} alt="" />
          <div className='header_car'>
              <h1 className='car_head'>MG</h1>
              <button className='button_shop1'>
                <div className='shop_now1'>Shop Now</div>
                <div className='show_nowlogo1'><HiArrowNarrowRight /></div>
              </button>
            </div>
          </div>
          <div className="car6"><img className='car_img' src={Hyundai} alt="" />
          <div className='header_car'>
              <h1 className='car_head'>Hyundai</h1>
              <button className='button_shop1'>
                <div className='shop_now1'>Shop Now</div>
                <div className='show_nowlogo1'><HiArrowNarrowRight /></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  )
}

export default Popular
