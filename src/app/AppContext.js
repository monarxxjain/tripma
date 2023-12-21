"use client"
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [selectedSeat, setSelectedSeat] = useState({
        seatNo: "--",
        seatType: "",
        isSeatSelected: false
    })
    
    const [selectedFlights, setSelectedFlights] = useState({
        departingFlight: null,
        returningFlight: null
    })

    const [journey, setJourney] = useState(selectedFlights?.departingFlight ? "arriving" : "departing")
  useEffect(()=>{console.log(selectedSeat)},[selectedSeat])


  return (
    <AppContext.Provider value={{ selectedFlights, setSelectedFlights, selectedSeat, setSelectedSeat, journey, setJourney }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
