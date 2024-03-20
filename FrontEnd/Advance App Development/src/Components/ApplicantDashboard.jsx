import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus, FaListAlt } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import './ApplicantDashboard.css';

function ApplicantDashboard() {

  const jobCategories = [
    { title: 'UI/UX Developer', description: 'Apply for UI/UX job' },
    { title: 'Web Developer', description: 'Apply for Web Developer job' },
    { title: 'Full Stack Developer', description: 'Apply for Full Stack Developer job' },
    { title: 'Front End Developer', description: 'Apply for Front End Developer job' },
    { title: 'Web Developer', description: 'Apply for Web Developer job' },
    { title: 'UI/UX Developer', description: 'Apply for UI/UX job' },
    { title: 'Full Stack Developer', description: 'Apply for Full Stack Developer job' },
    { title: 'Front End Developer', description: 'Apply for Front End Developer job' }
  ];

  return (
    <div>
      <div className='navbar'>
        <Link to='/' className='menu-bars'>
          <FaHome className='icon' />
        </Link>
        <div className='portal-name'>
          <span>JOB SPARK Portal</span>
        </div>
        <Link to='/jobpostings' className='menu-bars'>
          <FaUserPlus className='icon' />
          <span className='link-text'>Job Postings</span>
        </Link>
        <Link to='/viewapplications' className='menu-bars'>
          <FaListAlt className='icon' />
          <span className='link-text'>View Applications</span>
        </Link>
        <Link to='/' className='menu-bars'>
          <AiOutlineLogout className='icon' />
          <span className='link-text'>Logout</span>
        </Link>
      </div>
      <div className="grid-container">
        {jobCategories.map((category, index) => (
          <div key={index} className="job-itemm" onClick={() => window.location.href = '/jobposting'}>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplicantDashboard;
