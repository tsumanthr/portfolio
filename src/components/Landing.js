import React from 'react';

export const LandingPage = ({ onFinish }) => {
  // Run onFinish callback after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="landing-page">
      <h1>Welcome to My Portfolio</h1>
      <p>Exploring my skills, projects, and experiences...</p>
      {/* Add any additional content for your landing page */}
    </div>
  );
};

export default LandingPage;
