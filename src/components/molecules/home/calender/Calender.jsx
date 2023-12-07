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

    const [selectDate, setSelectDate] = useState([]);

    const selectHandler = (e) => {
        setSelectDate((prev) => {
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
        setScreenW(window.innerWidth);
    }, [screenW]);

    const handleSubmit = () => {
        setSelectedValue(`${moment(selectDate[0]).format('DD MMM')} to ${moment(selectDate[1]).format('DD MMM')}`)
    }

    return (
        <div className="calender-wrp bg-white rounded-lg  full-shadow absolute left-[-262px] top-[-60px] border-[#7C8DB0]">
            <div className='flex justify-between gap-8 w-max items-center p-4 border-b-2 border-b-[#7c8db07d]'>
                <div className='flex items-center'>
                    <input type='radio' id='round-trip' value={"Round Trip"} name="trip-type"/>
                    <label className='text-grey-custom ms-2' for="round-trip">Round Trip</label>
                    <input className='ms-5' type='radio' id='one-way' value={"One way"} name="trip-type"/>
                    <label className='text-grey-custom ms-2' for="one-way">One way</label>
                </div>
                <div className='flex gap-1 items-center'>
                    <div
                        className={`flex items-center gap-2 shadow-md py-1 px-3 rounded-md border-[#605DEC] border-2 pointer-events-none`}
                    >
                        <Image src={CalenderIcon} />
                        <input
                            className='outline-0 bg-transparent'
                            type='text'
                            value={`${moment(selectDate[0]).format('DD MMM')} - ${moment(selectDate[1]).format('DD MMM')}`}
                            placeholder={"Depart - Return"}
                        />
                    </div>
                    <button className='bg-purple-blue h-min text-white rounded-md py-2.5 px-5 active:scale-95 transition-all' onClick={()=>{handleSubmit; setIsOptionsVisible(false)}}>Done</button>
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
                        {screenW > 600 && <CalenderItem data={lasttMon} select={{ selectDate, handler: selectHandler }} />}

                    </div>

                    <div className="arrow-btns ms-5">
                        <button onClick={lastArrow}>
                            <Image src={RightArrow} height={35}/>
                        </button>
                    </div>
                </div>
                {/* <div className="calender-footer">
                    <div className="calender-footer-color">
                        <div>
                            <span className="cheap"></span> <p>€</p>
                        </div>
                        <div>
                            <span className="medium"></span> <p>€€</p>
                        </div>
                        <div>
                            <span className="expensive"></span> <p>€€€</p>
                        </div>
                    </div>
                    <div className="calender-footer-btns">
                        <button
                            className="cancel"
                            onClick={() => {
                                handler(false);
                            }}
                        >
                            Annulla
                        </button>
                        <button onClick={submitHandler} className="success">
                        Cerca le offerte!
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
