import React from 'react';
import './ViewApplication.css';

const ViewApplications = () => {
  return (
    <div className="view-application-container">
      <div className="approval-message">
        <h1>Application Approved</h1>
        <p>Your application has been successfully approved!</p>
        <p>Congratulations on your achievement!</p>
        <p>If you have any queries or require further assistance, please don't hesitate to contact us.</p>
        <p>Thank you for selecting Job Spark for your career path!</p>
        <p>Best regards,</p>
        <p>The Job Spark Team</p>
      </div>
      <div className="image-container">
       <img src="https://img.freepik.com/premium-vector/green-approved-stamp-with-grunge_115464-413.jpg?size=626&ext=jpg&ga=GA1.1.2029904084.1710864170&semt=sph"></img>
      </div>
    </div>
  );
}

export default ViewApplications;
