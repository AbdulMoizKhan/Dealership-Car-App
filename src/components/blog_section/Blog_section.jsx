import React from 'react';
import BlogCard from '../../molecules/blog_card/Blogcard';
import './blog_section.scss'; 
import toyota from '../../assets/toyota.jpg';
import toyotablog from '../../assets/toyotablog.png';
import MGlogo from '../../assets/MGlogo.png';
import Suzukilogo from '../../assets/Suzukilogo.png';
import { GiCarWheel } from 'react-icons/gi';
import { FaMinus } from 'react-icons/fa6';


const blogData = [
  {
    date: "01 Jan 2021",
    title: "Suzuki Launches 220i M Sport In India At Rs 40.90 lakh!",
    imageUrl: Suzukilogo,
  },
  {
    date: "01 Jan 2021",
    title: "Sales Figures Highlight The Bitter-Sweet Tale Of Toyota!",
    imageUrl: toyotablog,
  },
  {
    date: "02 Jan 2021",
    title: "MG Price Hiked and 6-seater AX Variant Phased Out!",
    imageUrl: MGlogo,
  }
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h1 className='heading_blog'>Our Blog</h1>
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
      <div className="blog-cards-container">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;