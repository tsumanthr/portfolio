import React from 'react';

export const LandingPage = ({ onFinish }) => {
  // Run onFinish callback after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="landing-page">
      <div className="waviy2">
              <span style={{ "--i": 1 }}>S</span>
              <span style={{ "--i": 2 }}>U</span>
              <span style={{ "--i": 3 }}>M</span>
              <span style={{ "--i": 4 }}>A</span>
              <span style={{ "--i": 5 }}>N</span>
              <span style={{ "--i": 6 }}>T</span>
              <span style={{ "--i": 7 }}>H</span>
              <span style={{ "--i": 10 }}> </span>
            </div>
    </div>
  );
};

export default LandingPage;
