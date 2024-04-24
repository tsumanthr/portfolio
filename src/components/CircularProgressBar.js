import React, { useRef, useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage }) => {
  const canvasRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const startPercentage = currentPercentage;
    const endPercentage = percentage;
    const duration = 2000; // Animation duration in milliseconds
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      const updatedPercentage = startPercentage + (endPercentage - startPercentage) * easedProgress;

      drawCanvas(context, updatedPercentage);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentPercentage(endPercentage);
      }
    };

    if (isIntersecting) {
      animate();
    }

    // Clean up function
    return () => {
      setIsIntersecting(false); // Reset intersection state
    };
  }, [percentage, isIntersecting]); // Re-run the animation whenever the percentage or intersection state changes

  useEffect(() => {
    // Reset animation state when the component mounts
    setIsIntersecting(false);
  }, []);

  const drawCanvas = (context, percentage) => {
    const centerX = canvasRef.current.width / 2;
    const centerY = canvasRef.current.height / 2;
    const radius = 45;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (percentage / 100) * (2 * Math.PI);
    const color = getColor(percentage);

    // Clear canvas
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Draw track
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = '#e6e6e6';
    context.lineWidth = 6;
    context.stroke();

    // Draw progress
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.strokeStyle = color;
    context.lineWidth = 6;
    context.stroke();

    // Display percentage text
    context.font = '20px Arial';
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(`${Math.round(percentage)}%`, centerX, centerY);
  };

  const getColor = (percent) => {
    if (percent >= 75) {
      return '#3F90FC'; // Blue for high percentages
    } else if (percent >= 50) {
      return '#3F90FC'; // Yellow for medium percentages
    } else {
      return '#3F90FC'; // Orange for low percentages
    }
  };

  // Easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Callback function for IntersectionObserver
  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    // Clean up function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="circular-progress-container">
      <canvas ref={canvasRef} className="circular-progress" width={100} height={100}></canvas>
    </div>
  );
};

export default CircularProgressBar;
