
import React from 'react';
import './blogcard.scss'; 

const BlogCard = ({ date, title, imageUrl }) => {
  return (
    <div className="blog-card" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="blog-card-content">
        <span className="blog-card-date">{date}</span>
        <h3 className="blog-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
