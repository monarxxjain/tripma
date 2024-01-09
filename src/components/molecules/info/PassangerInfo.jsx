"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Luggage from '@/assets/images/Luggage.svg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'
import Summary from '@/components/atoms/Summary'
import CountryCode from '@/components/atoms/countryCode/CountryCode'
import { styled } from '@mui/system';
import CountrySelect from '@/components/atoms/countryCode/CountrySelect'


const useStyles = styled((theme) => ({
  smallInput: {
    '& input': {
      padding: theme.spacing(1), // You can adjust the padding to control the size
    },
  },
}));

const PassangerInfo = () => {
    const classes = useStyles();
    const searchDetails = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("searchDetails")) : null
    const adultCount = Number(searchDetails?.count.slice(0,1))
    const adultForms = Array.from({ length: adultCount }, (_, index) => index);
    const childCount = Number(searchDetails?.count.slice(11,12))
    const childForms = Array.from({ length: childCount }, (_, index) => index);
    const totalPassangers = adultCount + childCount
    const [checkedBags, setCheckedBags] = useState(0)
    const [seatSelectActive, setSeatSelectActive] = useState(false)
    const [passInfo, setPassInfo] = useState(() => {
        const passangerDetails = {
            passangers: [],
            emergencyDetails: {
                sameAsPass: "passanger1",
                emergencyFirstName: "",
                emergencyLastName: "",
                emergencyEmail: "",
                emergencyPhoneNo: "",
            },
            bags: ""
        };
      
        for (let i = 1; i <= totalPassangers; i++) {
          passangerDetails.passangers[`passanger${i}`] = {
            passangerType: "",

            nameTitle: "",
            firstName: "",
            middleName: "",
            lastName: "",

            suffix: "",
            dob: "",
            email: "",
            gender: "",

            countryCode: "",
            phoneNo: "",

            redressNo: "",
            knownTravellerNo: "",

            countryOfPassIssue: "",
            passportNo: "",
            passportExp: ""
          };
        }
      
        return passangerDetails;
      })

    useEffect(()=>{
        
        if( passInfo.emergencyDetails.emergencyFirstName!='' && passInfo.emergencyDetails.emergencyFirstName!=null && passInfo.emergencyDetails.emergencyLastName!='' && passInfo.emergencyDetails.emergencyEmail!='' && passInfo.emergencyDetails.emergencyPhoneNo!='') {
            setSeatSelectActive(true)
        }
        console.log(passInfo)
        
    },[passInfo])

    const editPassangerDetails = (value, index, field) => {
        setPassInfo(prevState=>(
            {
                ...prevState,  passangers: {
                    ...prevState.passangers, [`passanger${index + 1}`]: {
                        ...prevState.passangers[`passanger${index + 1}`], [field]: value
                    }
                }
            }
        ))
    }

    const editEmergencyDetails = (value, field) => {
        setPassInfo(prevState => (
            {
                ...prevState, emergencyDetails: {
                    ...prevState.emergencyDetails, [field]: value
                }
            }
        ))
    }

    const titleOptions = [
        'Mr.',
        'Mrs.',
        'Miss',
        'Ms.',
        'Dr.',
        'Prof.',
        'Rev.',
        'Capt.',
        'Lt.',
        'Col.',
        'Major',
        'Cmdr.',
        'Sgt.',
        'Cpl.',
        'Sir',
        'Madam',
        'Lord',
        'Lady',
        'Duke',
        'Duchess',
        'Ambassador',
        'Judge',
        'Justice',
        'Honorable',
      ];

      const controlRadio = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });
    
    const flights = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("flights")) : null

  return (
    <div className='px-4 sm:px-10 lg:px-24 py-14 gap-16 flex flex-col-reverse md:flex-row md:items-end md:justify-between'>
      <div className='text-[#7C8DB0] md:w-2/3'>
        <h3 className='text-purple-blue font-semibold text-2xl'>Passenger Information</h3>
        <p className='mt-4'>Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</p>
        
        <form>
            {adultForms.map((form, index)=>{
                
                return (
                    <div key={index} className='flex flex-col gap-6'>
                        <h4 className='text-[#6E7491] font-semibold text-lg mt-9'>Passenger {index+1} (Adult)</h4>

                        <div className='grid grid-cols-2 xl:grid-cols-4 gap-y-3 gap-6'>
                            <FormControl size="small">
                                <InputLabel id="demo-select-small-label">Title</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    label="Title"
                                    onChange={(e)=>{editPassangerDetails(e.target.value, index, "nameTitle")}}
                                >
                                    {titleOptions.map((option, id)=>{
                                        return (
                                            <MenuItem key={id} value={option}>{option}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                            <TextField
                                label="First name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "firstName"); editPassangerDetails("Adult", index, "passangerType")}}
                                required
                            />
                            <TextField
                                label="Middle name"
                                id="outlined-size-small"
                                defaultValue=""
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "middleName")}}
                                size="small"
                            />
                            <TextField
                                label="Last name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "lastName")}}
                                required
                            />
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-0'>
                            
                            <TextField
                                label="Suffix"
                                id="outlined-size-small"
                                defaultValue=""
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "suffix")}}
                                size="small"
                            />
                            <div className='dob'>
                                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        renderInput={(props) => (
                                            <TextField {...props} size="small"  className="h-1"/> 
                                        )}
                                        defaultValue={dayjs()}
                                        onChange={(date)=>{editPassangerDetails(date[`$d`], index, "dob")}}
                                    />
                                </LocalizationProvider>
                                <p className='mt-1 text-xs text-right w-full lg:text-left'>Date of Birth (MM/DD/YY)</p>

                            </div>
                            <TextField
                                label="Email address"
                                type='email'
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "email")}}
                                required
                            />
                            <div>
                                <p className='text-sm'>Gender</p>
                                <div className='flex gap-4'>
                                    <RadioGroup
                                        aria-labelledby="demo-form-control-label-placement"
                                        name="position"
                                        onChange={(e)=>{editPassangerDetails(e.target.value, index, "gender")}}
                                    >
                                        <div className='flex -mt-1'>
                                            <FormControlLabel 
                                                value="Male" 
                                                control={<Radio className='h-min' 
                                                            sx={{
                                                                color: "#605DEC",
                                                                '&.Mui-checked': {
                                                                    color: "#605DEC",
                                                                },
                                                                }} 
                                                            size="small"
                                                        />
                                                } 
                                                label="Male" 
                                            />
                                            <FormControlLabel 
                                                value="Female" 
                                                control={<Radio className='h-min' 
                                                            sx={{
                                                                color: "#605DEC",
                                                                '&.Mui-checked': {
                                                                    color: "#605DEC",
                                                                },
                                                                }} 
                                                            size="small"
                                                        />
                                                } 
                                                label="Female" 
                                            />

                                        </div>
                                    </RadioGroup>

                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            
                            <CountryCode handler={editPassangerDetails} index={index} />
                            <TextField
                                label="Phone number"
                                type='number'
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "phoneNo")}}
                                required
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <TextField
                                label="Redress number"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "redressNo")}}
                            />
                            <TextField
                                label="Known traveller number"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, index, "knownTravellerNo")}}
                                required
                            />
                        </div>
                        <div>
                            <p className='text-sm mb-1'>Travel Documents</p>
                            <div className='grid grid-cols-2 xl:grid-cols-3 gap-6'>
                                <CountrySelect handler={editPassangerDetails} index={index} />
                                <TextField
                                    label="Passport number"
                                    id="outlined-size-small"
                                    defaultValue=""
                                    size="small"
                                    onChange={(e)=>{editPassangerDetails(e.target.value, index, "passportNo")}}
                                    required
                                />
                                <div className='dob'>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            renderInput={(props) => (
                                                <TextField {...props} size="small"  className="h-1" placeholder='Select a date'/> // Set the size to "small"
                                            )}
                                            defaultValue={dayjs()}
                                            onChange={(date)=>{editPassangerDetails(date[`$d`], index, "passportExp")}}
                                        />
                                    </LocalizationProvider>
                                    <p className='mt-1 text-xs'>Passport Expiry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            {childForms.map((form, index)=>{
                
                return (
                    <div key={index} className='flex flex-col gap-6'>
                        <h4 className='text-[#6E7491] font-semibold text-lg mt-9'>Passenger {adultCount + index+1} (Minor)</h4>

                        <div className='flex gap-6'>
                            <TextField
                                label="First name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "firstName"); editPassangerDetails("Minor", adultCount + index, "passangerType")}}
                                required
                            />
                            <TextField
                                label="Middle name"
                                id="outlined-size-small"
                                defaultValue=""
                                onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "middleName")}}
                                size="small"
                            />
                            <TextField
                                label="Last name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "lastName")}}
                                required
                            />
                        </div>
                        <div className='flex gap-6'>
                            <TextField
                                label="Suffix"
                                id="outlined-size-small"
                                defaultValue=""
                                onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "suffix")}}
                                size="small"
                            />
                            <div>
                                <TextField
                                    label="Date of birth"
                                    id="outlined-size-small"
                                    defaultValue=""
                                    size="small"
                                    onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "dob")}}
                                    required
                                />
                                <p className='mt-1 text-xs'>MM/DD/YY</p>

                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <TextField
                                label="Redress number"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "redressNo")}}
                            />
                            <TextField
                                label="Known traveller number"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={(e)=>{editPassangerDetails(e.target.value, adultCount + index, "knownTravellerNo"); editPassangerDetails(e.target.value, adultCount + index, "phoneNo");}}
                                required
                            />
                        </div>
                    </div>
                )
            })}

            <div className='flex flex-col gap-6'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12'>Emergency contact information</h4>

                <div className='flex gap-2 items-center'>
                    <input type='checkbox' onChange={(e)=>{
                        if(e.target.checked){   
                            editEmergencyDetails( passInfo.passangers[passInfo.emergencyDetails.sameAsPass]?.firstName, "emergencyFirstName" )
                            editEmergencyDetails( passInfo.passangers[passInfo.emergencyDetails.sameAsPass]?.lastName, "emergencyLastName" )
                            editEmergencyDetails( passInfo.passangers[passInfo.emergencyDetails.sameAsPass]?.email, "emergencyEmail" )
                            editEmergencyDetails( passInfo.passangers[passInfo.emergencyDetails.sameAsPass]?.phoneNo, "emergencyPhoneNo" )
                        }
                        else{
                            editEmergencyDetails( "", "emergencyFirstName")
                            editEmergencyDetails( "", "emergencyLastName")
                            editEmergencyDetails( "", "emergencyEmail")
                            editEmergencyDetails( "", "emergencyPhoneNo")
                        }
                    }} />
                    <label className='mb-0.5'>Same as 
                        <select onChange={(e)=>{editEmergencyDetails(`passanger${e.target.value}`, "sameAsPass")}}>
                            {adultForms.map((option, id) => (
                                <option key={id} value={option+1}>
                                Passanger {" " + (option+1)}
                                </option>
                            ))}
                        </select>

                    </label>
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="First name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyDetails.emergencyFirstName}
                        onChange={(e)=>{editEmergencyDetails(e.target.value, "emergencyFirstName")}}
                        required
                    />
                    <TextField
                        label="Last name"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyDetails.emergencyLastName}
                        onChange={(e)=>{editEmergencyDetails(e.target.value, "emergencyLastName")}}
                        required
                    />
                </div>
                <div className='flex gap-6'>
                    <TextField
                        label="Email address"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyDetails.emergencyEmail}
                        onChange={(e)=>{editEmergencyDetails(e.target.value, "emergencyEmail")}}
                        required
                    />
                    <TextField
                        label="Phone number"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        value={passInfo.emergencyDetails.emergencyPhoneNo}
                        onChange={(e)=>{editEmergencyDetails(e.target.value, "emergencyPhoneNo")}}
                        required
                    />
                </div>
            </div>
        </form>

        <div>
            <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Bag information</h4>
            <p>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. <a href='#' className='text-purple-blue'>See the full bag policy.</a></p>
        </div>

        <div className=' flex'>
            <div className='flex-1'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Passanger 1</h4>
                <p>First Last</p>
            </div>
            <div className='flex-1'>
                <h4 className='text-[#6E7491] font-semibold text-lg mt-12 mb-2'>Checked bags</h4>
                <div className='flex items-center gap-3'>
                    <div className='text-purple-blue text-3xl tracking-[-5px] me-1 -mt-1 cursor-pointer select-none' onClick={()=>{if(checkedBags!==0){
                        setCheckedBags(checkedBags-1);
                        setPassInfo(prevState=>({...prevState, bags: checkedBags-1}))
                    }}}>--</div>
                    <div className='text-2xl text-[#7C8DB0]'>{checkedBags}</div>
                    <div className='text-purple-blue text-3xl cursor-pointer select-none -mt-1' onClick={()=>{setCheckedBags(checkedBags+1); setPassInfo(prevState=>({...prevState, bags: checkedBags+1}))}}>+</div>
                </div>
            </div>

        </div>

        <div className='flex gap-6 mt-10 md:mt-20'>
            <button className='text-lg px-5 py-3 rounded text-purple-blue border border-[#605DEC] active:scale-95 transition-transform hover:bg-[#5f5dec10] hover:shadow'>Save and close</button>
            <Link href={"/booking"} onClick={()=>{localStorage.setItem("passangerDetails",  JSON.stringify(passInfo))}} className={`text-lg px-5 py-3 rounded border ${seatSelectActive ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d] pointer-events-none"} `}>Select seats</Link>
        </div>
      </div>

      <div className='md:w-1/3 flex flex-col md:items-end'>
            <div className='mb-10 md:mb-28 flex flex-col gap-8 w-full'>
                <div className='xl:self-end'>
                    <Summary flights={flights}/>
                </div>
                <div className='self-end'>          
                    <Link href={"/booking"} onClick={()=>{localStorage.setItem("passangerDetails",  JSON.stringify(passInfo))}} className={`text-lg px-5 py-3 rounded border text-[#7C8DB0] ${seatSelectActive ? "bg-purple-blue text-white active:scale-95 transition-transform" : "border-[#7C8DB0] bg-[#cbd4e64d] pointer-events-none"} `}>Select seats</Link>
                </div>
            </div>
            <Image src={Luggage} alt='Luggage Dimensions' />
      </div>

    </div>
  )
}

export default PassangerInfo
