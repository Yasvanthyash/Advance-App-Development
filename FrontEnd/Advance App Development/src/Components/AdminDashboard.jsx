import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AdminSidebarData } from './AdminSideBar';
import './AdminDashboard.css';
import { IconContext } from 'react-icons';

function AdminDashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  
  const recentlyAppliedJobs = [
    { id: 1, applicantName: 'Priyanka', appliedJob: 'UI/UX Designer' },
    { id: 2, applicantName: 'Yasvanth', appliedJob: 'UI/UX Designer' },
    { id: 3, applicantName: 'Priyanka', appliedJob: 'FrontEnd Designer' },
    { id: 4, applicantName: 'Yasvanth', appliedJob: 'BackEnd Designer' },
    { id: 5, applicantName: 'Priyanka', appliedJob: 'Full Stack Developer' },
    { id: 6, applicantName: 'Yasvanth', appliedJob: 'Full Stack Developer' },
  ];

  const recentlyAppliedUsers = [
    { id: 1, name: 'Priyanka' },
    { id: 2, name: 'Yasvanth' },
    { id: 3, name: 'Alice Smith' },
    { id: 4, name: 'Bob Johnson' },
  ];

  const mostApplyingJobs = [
    { id: 1, title: 'UI/UX Designer', applicants: 10 },
    { id: 2, title: 'FrontEnd Developer', applicants: 8 },
    { id: 3, title: 'BackEnd Developer', applicants: 6 },
  ];

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <div className='dashboard-container'>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{color: "white"}}/>
          </Link>
          <div id="button" style={{color:"white",fontSize:"21px"}}>
            <div id="Log-sign">
              <Link to="/" style={{textDecoration: "none"}}>
                <span style={{marginRight:"100px",color:"white"}}>Log out</span>
              </Link>
            </div>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {AdminSidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="dashboard-content">
          <div className="dashboard-box blue">
            <h2>Recently Applied Jobs</h2>
            <ul>
              {recentlyAppliedJobs.map(job => (
                <li key={job.id}>
                  <span>Applicant Name: {job.applicantName}</span>
                  <span>Applied Job: {job.appliedJob}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="dashboard-box purple">
            <h2>Recently Applied Users</h2>
            <ul>
              {recentlyAppliedUsers.map(user => (
                <li key={user.id}>
                  <span>Name: {user.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dashboard-box grey">
            <h2>Most Applying Jobs</h2>
            <ul>
              {mostApplyingJobs.map(job => (
                <li key={job.id}>
                  <span>Title: {job.title}</span>
                  <span>Applicants: {job.applicants}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default AdminDashboard;
