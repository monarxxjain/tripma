"use client"
import React, { useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

// Define the component
const AlertComponent = () => {
  // State to control the visibility of the alert
  const [isVisible, setIsVisible] = useState(true);

  const alert = useRef()
  // Function to handle the click event on the cross button
  const handleClose = () => {
    alert.current.classList.add('fade-out')
    setTimeout(() => {
      setIsVisible(false);
    }, 350);
  };

  return (
    <>
      {isVisible && (
        <div ref={alert}>
          <div className="flex justify-between bg-purple-blue text-white font-semibold py-4 px-8 gap-16">
            <p className='invisible hidden lg:block'>Hi</p>
            <p className="text-md">Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.</p>
            <button
              className="float-right text-white hover:text-gray-300"
              onClick={handleClose}
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
