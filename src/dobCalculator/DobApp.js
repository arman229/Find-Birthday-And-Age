import {DateInputComponent} from "./DateInputComponent";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import React, {createContext, useState} from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {OutputComponent} from "./OutputComponent";


export const DobContext = createContext({})
export const DobApp = () => {


    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    const [dayOfWeek, setDayOfWeek] = useState("")
    const [days, setDays] = useState(0)
    const [months, setMonths] = useState(0)
    const [years, setYears] = useState(0)

    function onDateChange(selectedDate) {
        const day = selectedDate.date();
        const month = selectedDate.month() + 1; // Months are zero-based, so add 1
        const year = selectedDate.year();

        const dob = new Date(`${year}-${month}-${day}`);
        const currentDate = new Date()
        var timeDiff = Math.abs(currentDate.getTime() - dob.getTime())
        const cyears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
        const cmonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.4375)) % 12;
        const cdays = Math.floor( (timeDiff / (1000 * 60 * 60 * 24)) % 30.4375);
        setDayOfWeek(daysOfWeek[dob.getDay()])
        setDays(cdays)
        setMonths(cmonths)
        setYears(cyears)

    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DobContext.Provider value={{
                onDateChange: onDateChange,
                dayOfWeek: dayOfWeek,
                days: days,
                months: months,
                years: years,
            }}>

    <DateInputComponent/>
    <OutputComponent/>
            </DobContext.Provider>

        </LocalizationProvider>)
}
