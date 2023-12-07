"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
const InputSearch = ({ icon, placeHolder, options }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    setIsOptionsVisible(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = (option) => {
    setSelectedValue(option);
    setIsOptionsVisible(false);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  // Close options when clicking outside the input and options
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOptionsVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef}>
      <div
        className={`flex items-center gap-2 border shadow-md py-1 px-3 ${
          placeHolder === 'From where?' ? 'rounded-s-md' : ''
        } ${placeHolder === '1 Adult' ? 'rounded-e-md' : ''} ${
          isFocused ? 'border-[#605DEC] border-2 rounded-md' : ''
        }`}
      >
        <Image src={icon} />
        <input
          className='outline-0 bg-transparent'
          type='text'
          value={selectedValue}
          placeholder={placeHolder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {isOptionsVisible && options && (
        <div className='bg-white rounded-lg p-4 flex flex-col gap-2 mt-1 full-shadow max-h-[216px] overflow-scroll hide-scroller'>
          {options?.map((option, id) => {
            return (
              <div
                key={id}
                onClick={() => {
                  handleClick(option);
                }}
                className='hover:text-white hover:bg-[#605DEC] px-2 rounded-md cursor-pointer'
              >
                {option}
              </div>
            );
          })}
        </div>
      )}

    {/* {isOptionsVisible && placeHolder=="Depart - Return" && <FlightBookingCalendar/>} */}

    </div>
  );
};

export default InputSearch;
