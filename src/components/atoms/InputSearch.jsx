"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Calender from '../molecules/home/calender/Calender';
const InputSearch = ({ setSearch, icon, value, placeHolder, options }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [adultCount, setAdultCount] = useState(1)
  const [childCount, setChildCount] = useState(0)
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    setIsOptionsVisible(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = (option) => {
    if(placeHolder=="From where?" && setSearch){
      setSearch((prev)=>({...prev, from: option}))
    }
    if(placeHolder=="Where to?" && setSearch){
      setSearch((prev)=>({...prev, to: option}))
    }
    setSelectedValue(option);
    setIsOptionsVisible(false);
  };

  useEffect(() => {
    if(placeHolder=="Depart - Return" && setSearch){
      setSearch((prev)=>({...prev, date: selectedValue}))
    }
  }, [selectedValue]);

  useEffect(()=>{
    if( setSearch){
      setSearch((prev)=>({...prev, count: `${adultCount} Adults ${childCount>0 ? "& "+ childCount + " Child" : ""}`}))
    }
  },[adultCount, childCount])
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
    <div ref={inputRef} className='relative'>
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
      {/* Dropdown */}
      {isOptionsVisible && options && (
        <div className='bg-white absolute w-full z-40 rounded-lg p-4 flex flex-col gap-2 mt-1 full-shadow max-h-[216px] overflow-scroll hide-scroller'>
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

    {isOptionsVisible && placeHolder=="Depart - Return" && 
        <div className='relative z-40'>
          <Calender setSelectedValue={setSelectedValue} setIsOptionsVisible={setIsOptionsVisible}/>
        </div>
    }

    {isOptionsVisible && placeHolder=="1 Adult" && <div className='bg-white z-40 absolute w-full rounded-lg p-4 mt-1 full-shadow'>
        <div className='flex justify-between items-center'>
          <div className='text-[#7C8DB0]'>Adults:</div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-purple-blue text-3xl tracking-[-5px] me-1 cursor-pointer' onClick={()=>{if(adultCount!==0){
              setAdultCount(adultCount-1);
              setSelectedValue(`${adultCount-1} Adults ${childCount!=0 ? ` & ${childCount} Child` : ""}`)
            }}}>--</div>
            <div className='text-2xl text-[#7C8DB0]'>{adultCount}</div>
            <div className='text-purple-blue text-3xl cursor-pointer' onClick={()=>{
              setAdultCount(adultCount+1)
              setSelectedValue(`${adultCount+1} Adults ${childCount!=0 ? ` & ${childCount} Child` : ""}`)
            }}>+</div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-[#7C8DB0]'>Minors:</div>
          <div className='flex items-center justify-between gap-3'>
            <div className='text-purple-blue text-3xl tracking-[-5px] me-1 cursor-pointer' onClick={()=>{if(childCount!==0){
              setChildCount(childCount-1);
              setSelectedValue(`${adultCount!=0 ? ` ${adultCount} Adult` : ""} ${childCount-1!=0 ? ` & ${childCount-1} Child` : ""}`)
            }}}>--</div>
            <div className='text-2xl text-[#7C8DB0]'>{childCount}</div>
            <div className='text-purple-blue text-3xl cursor-pointer' onClick={()=>{
              setChildCount(childCount+1)
              setSelectedValue(`${adultCount!=0 ? ` ${adultCount} Adult` : ""} ${childCount+1!=0 ? ` & ${childCount+1} Child` : ""}`)
            }}>+</div>
          </div>
        </div>
        
      </div>}

    </div>
  );
};

export default InputSearch;
