import React from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import { Menu } from 'antd';
import './nav.scss';
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <span className="logo-text">CAR<span className="span-quest">QUEST</span></span>
      </div>
      <Menu theme="Light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="home" spy={true} smooth={true} duration={500} className="link-white">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="services" spy={true} smooth={true} duration={500} className="link-white">
            Services
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="models" spy={true} smooth={true} duration={500} className="link-white">
            Models
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="blog" spy={true} smooth={true} duration={500} className="link-white">
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="contact" spy={true} smooth={true} duration={500} className="link-white">
            Contact Us
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="about" spy={true} smooth={true} duration={500} className="link-white">
            About Us
          </Link>
        </Menu.Item>
      </Menu>
      <div className="checkout-logo">
        <CiShoppingBasket />
      </div>
    </div>
  );
};
export default Nav;
