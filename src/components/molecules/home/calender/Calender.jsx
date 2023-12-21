import moment from 'moment';
// import 'moment/locale/en';
import { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import CalenderItem from './CalenderItem';
import Image from 'next/image'
import RightArrow from '@/assets/icons/right-arrow.png'
import LeftArrow from '@/assets/icons/left-arrow.png'
import CalenderIcon from '@/assets/icons/calendar.svg'

export default function Calender({setSelectedValue, setIsOptionsVisible}) {
    useEffect(() => {
        moment.locale('en');
    }, []);

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

    const [firstMon, setFirstMon] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
    });
    const [lasttMon, setLastMon] = useState({
        year: new Date().getFullYear(),
        month: firstMon.month + 1,
    });

    const [firstSelection, setFirstSelection] = useState(true);

    const [selectDate, setSelectDate] = useState(["--", "--"]);

    const selectHandler = (e) => {
        setSelectDate((prev) => {
            if (tripType === "One way") {
                // For "One way" trip type, only allow one date to be selected
                return [e];
            }
            else{
                
                if (firstSelection) {
                    setFirstSelection(false);
                    return [e];
                }
                if (prev.length === 0) {
                    return [e];
                } else if (prev.length === 1) {
                    if (prev[0] !== e) {
                        if (prev[0] < e) {
                            return [...prev, e];
                        } else {
                            return [e, ...prev];
                        }
                    } else {
                        return [...prev];
                    }
                } else if (prev.length === 2) {
                    if (prev[1] > e) {
                        return [e];
                    } else {
                        prev.pop();
                        if (prev[0] < e) {
                            return [...prev, e];
                        } else {
                            return [e, ...prev];
                        }
                    }
                }
            }
        });
    };

    const firstArrow = () => {
        setFirstMon((prev) => {
            return { ...prev, month: prev.month - 1 };
        });
        setLastMon((prev) => {
            return { ...prev, month: prev.month - 1 };
        });
    };
    const lastArrow = () => {
        setFirstMon((prev) => {
            return { ...prev, month: prev.month + 1 };
        });
        setLastMon((prev) => {
            return { ...prev, month: prev.month + 1 };
        });
    };

    const [screenW, setScreenW] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenW(window.innerWidth);
        };
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 

    const handleSubmit = () => {
        if(tripType=="Round Trip" && selectDate[0] && selectDate[1]){
            setSelectedValue(`${moment(selectDate[0]).format('DD MMM')} to ${moment(selectDate[1]).format('DD MMM')}`)
        }
        else{
            setSelectedValue(`${moment(selectDate[0]).format('DD MMM')}`)
        }
    }

    const [tripType, setTripType] = useState("Round Trip");
    const handleTripTypeChange = (event) => {
        setTripType(event.target.value);
        setSelectDate(["--", "--"])
      };

    return (
        <div className="calender-wrp bg-white rounded-lg  full-shadow absolute xl:left-[-262px] top-[-60px] border-[#7C8DB0]">
            <div className='flex flex-col-reverse md:flex-row justify-between gap-3 md:gap-8 w-full md:w-max items-center p-4 border-b-2 border-b-[#7c8db07d]'>
            <div className='flex items-center'>
                <input
                    type='radio'
                    id='round-trip'
                    value={"Round Trip"}
                    name="trip-type"
                    checked={tripType === "Round Trip"}
                    onChange={handleTripTypeChange}
                />
                <label className='text-grey-custom ms-2' htmlFor="round-trip">Round Trip</label>

                <input
                    className='ms-5'
                    type='radio'
                    id='one-way'
                    value={"One way"}
                    name="trip-type"
                    checked={tripType === "One way"}
                    onChange={handleTripTypeChange}
                />
                <label className='text-grey-custom ms-2' htmlFor="one-way">One way</label>

            </div>
                <div className='flex gap-1 items-center'>
                    <div
                        className={`flex items-center gap-2 shadow-md py-1 px-3 rounded-md border-[#605DEC] border-2 pointer-events-none`}
                    >
                        <Image src={CalenderIcon} />
                        <input
                            className='outline-0 bg-transparent'
                            type='text'
                            value={`${tripType=="Round Trip" ? (selectDate[0]!="--" ? moment(selectDate[0]).format('DD MMM') : selectDate[0]) + " to " + (selectDate[1]!="--" ?(moment(selectDate[1]).format('DD MMM')): selectDate[1]) : (selectDate[0]!="--" ? moment(selectDate[0]).format('DD MMM') : selectDate[0])}`}
                            placeholder={"Depart - Return"}
                        />
                    </div>
                    <button className='bg-purple-blue h-min text-white rounded-md py-2.5 px-5 active:scale-95 transition-all' onClick={()=>{handleSubmit(); setIsOptionsVisible(false)}}>Done</button>
                </div>
            </div>
            <div className="calender p-4">
                <div className="calender-body flex items-center gap-4">
                    <div className="arrow-btns">
                        <button onClick={firstArrow}>
                            <Image src={LeftArrow} height={35}/>
                        </button>
                    </div>
                    
                    <div className='flex gap-16'>
                        <CalenderItem data={firstMon} select={{ selectDate, handler: selectHandler }} />
                        {screenW > 768 && tripType=="Round Trip" &&  <CalenderItem data={lasttMon} select={{ selectDate, handler: selectHandler }} />}

                    </div>

                    <div className="arrow-btns ms-5">
                        <button onClick={lastArrow}>
                            <Image src={RightArrow} height={35}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
