import React, { useState } from 'react'
import './top_deal.css'
import { GiCarWheel } from 'react-icons/gi';
import { FaMinus } from 'react-icons/fa6';
import civix from '../../assets/civix.jpg'
import { GiGearStickPattern } from 'react-icons/gi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { BiGasPump } from 'react-icons/bi';
import { Element } from 'react-scroll';
import camry from '../../assets/camry.png';
import toyotafurtu from '../../assets/toyotafurtu.png';
import suzukialto from '../../assets/suzukialto.png'
import swift from '../../assets/swift.png'
import cultus from '../../assets/cultus.png'
import MGZS from '../../assets/MGZS.png';
import MGhector2 from '../../assets/MGhector2.png';
import MGgloster from '../../assets/MGgloster.png';
import Kiapicanto from '../../assets/Kiapicanto.png';
import Kiacarnival from '../../assets/Kiacarnival.png';
import Kiasportage from '../../assets/Kiasportage.png';
import Hyundaiaccent from '../../assets/Hyundaiaccent.png';
import Hyundaisanta from '../../assets/Hyundaisanta.png';
import Hyundaituscan from '../../assets/Hyundaituscan.png';

const Toyota = [
    {
        name: 'Toyota Corolla',
        price: 'PKR 2,000,000',
        mileage: '16 km/l',
        manual_auto: 'Automatic',
        image: civix,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Toyota Camry',
        price: 'PKR 3,500,000',
        mileage: '14 km/l',
        manual_auto: 'Automatic',
        image: camry,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Toyota Fortuner',
        price: 'PKR 4,000,000',
        mileage: '10 km/l',
        manual_auto: 'Manual',
        image: toyotafurtu,
        petrol_diesel: 'Petrol',
    },
];
const Suzuki = [
    {
        name: 'Suzuki Alto',
        price: 'PKR 1,200,000',
        mileage: '20 km/l',
        manual_auto: 'Manual',
        image: suzukialto,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Suzuki Swift',
        price: 'PKR 1,800,000',
        mileage: '18 km/l',
        manual_auto: 'Automatic',
        image: swift,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Suzuki Cultus',
        price: 'PKR 1,500,000',
        mileage: '16 km/l',
        manual_auto: 'Manual',
        image: cultus,
        petrol_diesel: 'Petrol',
    },
];
const Kia = [
    {
        name: 'Kia Picanto',
        price: 'PKR 1,400,000',
        mileage: '22 km/l',
        manual_auto: 'Automatic',
        image: Kiapicanto,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Kia Carnival',
        price: 'PKR 2,000,000',
        mileage: '20 km/l',
        manual_auto: 'Automatic',
        image: Kiacarnival,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Kia Sportage',
        price: 'PKR 2,500,000',
        mileage: '18 km/l',
        manual_auto: 'Automatic',
        image: Kiasportage,
        petrol_diesel: 'Petrol',
    },
];
const MG = [
    {
        name: 'MG ZS',
        price: 'PKR 1,600,000',
        mileage: '19 km/l',
        manual_auto: 'Automatic',
        image: MGZS,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'MG Hector',
        price: 'PKR 2,200,000',
        mileage: '17 km/l',
        manual_auto: 'Automatic',
        image: MGhector2,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'MG Gloster',
        price: 'PKR 3,500,000',
        mileage: '15 km/l',
        manual_auto: 'Automatic',
        image: MGgloster,
        petrol_diesel: 'Petrol',
    },
];
const Hyundai = [
    {
        name: 'Hyundai Accent',
        price: 'PKR 1,300,000',
        mileage: '21 km/l',
        manual_auto: 'Manual',
        image: Hyundaiaccent,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Hyundai Tucson',
        price: 'PKR 2,000,000',
        mileage: '18 km/l',
        manual_auto: 'Automatic',
        image: Hyundaisanta,
        petrol_diesel: 'Petrol',
    },
    {
        name: 'Hyundai Santa Fe',
        price: 'PKR 2,800,000',
        mileage: '16 km/l',
        manual_auto: 'Automatic',
        image: Hyundaituscan,
        petrol_diesel: 'Petrol',
    },
];

const Top_deal = ({ selectedBrand }) => {
    const [brandoption, setBrandoption] = useState(selectedBrand)

    const brand_select = (brand) => {
        setBrandoption(brand)
        console.log(brand)
    }
    const cars = brandoption === 'Toyota' ? Toyota :
        brandoption === 'Suzuki' ? Suzuki :
            brandoption === 'Kia' ? Kia :
                brandoption === 'MG' ? MG :
                    brandoption === 'Hyundai' ? Hyundai : [];
    return (
       
        <div className='td'>
            <div className='top_deals'>
                <div className="heading_td">Explore Our Top Deals</div>
                <div className="icon_popular2">
                    <div className="minus12">
                        <div className="minus_first2"><FaMinus /></div>
                        <div className="minus_secondone2"><FaMinus /></div>
                    </div>
                    <div className="icon_wheel2"><GiCarWheel /></div>
                    <div className="minus12">
                        <div className="minus_first2"><FaMinus /></div>
                        <div className="minus_secondtwo2"><FaMinus /></div>
                    </div>
                </div>
                <div className="options_brands">
                    <div className="brand">
                        <button className='option_brand_btn' onClick={() => brand_select('Toyota')}>Toyota</button>
                    </div>
                    <div className="brand">
                        <button className='option_brand_btn' onClick={() => brand_select('Suzuki')}>Suzuki</button>
                    </div>
                    <div className="brand">
                        <button className='option_brand_btn' onClick={() => brand_select('MG')}>MG</button>
                    </div>
                    <div className="brand">
                        <button className='option_brand_btn' onClick={() => brand_select('Kia')}>Kia</button>
                    </div>
                    <div className="brand">
                        <button className='option_brand_btn' onClick={() => brand_select('Hyundai')}>Hyundai</button>
                    </div>
                </div>
                <div className="cars">
                    {cars.map((car, index) => (
                        <div className="td_cars" key={index}>
                            <div className="car_detail shadow">
                                <div><img className='td_img' src={car.image} alt="" /></div>
                                <div className='car_tittle'>{car.name}</div>
                                <div className='rs'> {car.price}</div>
                                <div className='detail'>
                                    <div className="mileage">
                                        <div className="icon_car_details"><BsSpeedometer2 /></div>
                                        <div className="text_car_details">{car.mileage}</div>
                                    </div>
                                    <div className="auto_manual">
                                        <div className="icon_car_details"><GiGearStickPattern /></div>
                                        <div className="text_car_details">{car.manual_auto}</div>
                                    </div>
                                    <div className="pet_dies">
                                        <div className="icon_car_details"><BiGasPump /></div>
                                        <div className="text_car_details">{car.petrol_diesel}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
       
    )
}

export default Top_deal



