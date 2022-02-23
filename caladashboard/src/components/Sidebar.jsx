import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Calamarket_V1.svg';

const Sidebar = () => {
  return (
    <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-100' id='accordionSidebar'>
      <a className='sidebar-brand d-flex align-items-center justify-content-center' href='/'>
        <div className='sidebar-brand-icon'>
          <img className='w-25' src={logo} alt='Digital House' />
        </div>
      </a>

      <hr className='sidebar-divider my-0' />

      <li className='nav-item active'>
        <Link className='nav-link' to='/dashboard'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>C A L A D A S H B O A R D</span>
        </Link>
      </li>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Actions</div>

      <li className='nav-item'>
        <Link className='nav-link collapsed' to='/genres'>
          <i className='fas fa-fw fa-folder'></i>
          <span>Genres</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/charts'>
          <i className='fas fa-fw fa-chart-area'></i>
          <span>Charts</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link' to='/tables'>
          <i className='fas fa-fw fa-table'></i>
          <span>Tables</span>
        </Link>
      </li>

      <hr className='sidebar-divider d-none d-md-block' />
    </ul>
  );
};

export default Sidebar;
