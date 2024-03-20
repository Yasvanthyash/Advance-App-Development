import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import './HomePage.css';
import './Header.css';

function Homee() {
  return (
    <div className="specific-div">
      <div className="wrapper">
        <div className="header-container"> 
          <Header />
        </div>
        <main>
          <div className="home-page">
            <div className="block">
              <div className="text-content">
                <p className="intro">
  <h2>JOB SPARK - Your Ultimate Online Job Application Portal!</h2>
  <p>We're thrilled to introduce JOB SPARK - your ultimate online destination for streamlining the job application process. With JOB SPARK, your job search just got easier and more efficient. Gone are the days of sifting through countless job listings and struggling to craft the perfect resume. </p>
  <p>Our platform is designed to revolutionize the way you approach job hunting, offering a seamless experience from start to finish. Whether you're exploring new career opportunities or seeking to advance in your current field, JOB SPARK provides the tools and resources you need to succeed.</p>
  <p>From personalized job recommendations to expert career advice, JOB SPARK caters to professionals of all backgrounds and experience levels. Say goodbye to the frustration of job hunting and hello to a brighter future with JOB SPARK by your side.</p>
                </p>
                <Link to="/applicantsignup" className="button">SIGN UP FOR FREE!</Link>
              </div>
              <div className="block-image">
                <img src="https://img.freepik.com/free-vector/personnel-management-online-service-platform-business-recruitment-empolyee-adaptation-hr-manager-hiring-new-worker-online-recruiting-flat-vector-illustration_613284-2797.jpg?size=626&ext=jpg" alt="An alt" className='right-image'/>
              </div>
            </div>
            <div className="block">
              <div className="block-image">
                <img src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?size=626&ext=jpg&ga=GA1.1.2085912591.1685513064&semt=ais" alt="An alt" className='left-image'/>
              </div>
              <div className="text-content">
                <h2>More Information</h2>
                <p>
    Whether you're a seasoned professional looking to advance your career or a fresh graduate eager to dive into the job market, JOB SPARK is your go-to platform for simplifying the job application process. With our user-friendly interface and comprehensive tools, we empower you to navigate through the complexities of job hunting with ease.
  </p>
  <p>
    At JOB SPARK, we understand the importance of finding the right job that aligns with your skills, interests, and aspirations. Our platform offers a wide range of features, including tailored job recommendations, resume building assistance, and interview preparation tips, to help you land your dream job effortlessly.
  </p>
  <p>
    Join JOB SPARK today and embark on a journey towards professional success. Let us guide you through the intricacies of job searching and application, making the process not only efficient but also enjoyable. Elevate your career prospects with JOB SPARK - where opportunities await!
  </p>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default Homee;
