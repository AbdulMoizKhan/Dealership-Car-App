import React, { useState } from 'react';
import { Card, Select } from 'antd';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';
import { GiRoad } from 'react-icons/gi';
import { HiFlag } from 'react-icons/hi';
import './select_vehicle.scss';
import { Element } from 'react-scroll';

const { Option } = Select;

const Select_vehicle = () => {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [category, setCategory] = useState("");

    const Make = [
        "Toyota",
        "Suzuki",
        "Kia",
        "Honda",
        "Morris Garage",
        "Hyundai",
    ];

    const Model = [
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
    ];

    const Category = [
        "Sedan",
        "Hatch-back",
        "SUV",
        "Wagon",
        "Truck",
    ];

    const onMakeChange = (value) => {
        setMake(value);
    };

    const onModelChange = (value) => {
        setModel(value);
    };

    const onCategoryChange = (value) => {
        setCategory(value);
    };
    const onSearchbtn = () => {
        console.log(`${make} ${model} ${category}`);
    }
    return (
        <Element name="services">
        <div>
            <div className='select-vehicle-box'>
                <Card className="shadow">
                    <div className='heading-vehicle-box'>Select Your Vehicle</div>
                    <div className='input-search-vehicle'>
                        <Select
                            className='input-search-text'
                            placeholder="Select Make"
                            onChange={onMakeChange}
                            value={make}
                        >
                            {Make.map((option, index) => (
                                <Option key={index} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>

                        <Select
                            className='input-search-text'
                            placeholder="Select Model"
                            onChange={onModelChange}
                            value={model}
                        >
                            {Model.map((option, index) => (
                                <Option key={index} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>

                        <Select
                            className='input-search-text'
                            placeholder="Select Category"
                            onChange={onCategoryChange}
                            value={category}
                        >
                            {Category.map((option, index) => (
                                <Option key={index} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>

                        <button className='btn-search' onClick={onSearchbtn}>
                            <span>Search</span> <HiArrowNarrowRight className="vehicle-arrowright" />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='services'>
                <div className="service1">
                    <div className='service-flex-column1'>
                        <div className='bg-service-img'>
                            <div><VscGraph /></div>
                        </div>
                    </div>
                    <h3 className='service_flex_column2'>Result Driven</h3>
                    <div className='service-flex-column3'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing eim modi ut distinctio,
                        labore minus libero quod impedit.</div>
                </div>
                <div className="service2">
                    <div className='service-flex-column1'>
                        <div className='bg-service-img'>
                            <div><GiRoad /></div>
                        </div>
                    </div>
                    <h3 className='service_flex_column2'>Proven Technology</h3>
                    <div className='service-flex-column3'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing eim modi ut distinctio,
                        labore minus libero quod impedit.</div>
                </div>
                <div className="service3">
                    <div className='service-flex-column1'>
                        <div className='bg-service-img'>
                            <div><HiFlag /></div>
                        </div>
                    </div>
                    <h3 className='service_flex_column2'>Winning Culture</h3>
                    <div className='service-flex-column3'>Lorem ipsum dolor sit amet,
                        consectetur adipisicing eim modi ut distinctio,
                        labore minus libero quod impedit.</div></div></div>
        </div>
        </Element>

    );
};

export default Select_vehicle;
