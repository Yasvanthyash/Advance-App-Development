import React from 'react';

const UserJobPosting = () => {
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
        <h1>Available Jobs</h1>
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
};

export default UserJobPosting;
