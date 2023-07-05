import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Button, Typography} from "@mui/material";
import React, {useContext, useRef, useState} from "react";
import {DobContext} from "./DobApp";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";


export const DateInputComponent = () => {
    const [date, setDate] = useState('');
    const dobContext = useContext(DobContext);

    return (
        <>
            <div>

                <div style={{  marginTop:"30px",

                    border: "2px solid gray",
              width: '400px',
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "30px 100px"
                }}>
                    <div>
                        <Typography variant={"h5"} style={{marginBottom: "5px"}}>Birthday Calculator</Typography>
                    </div>
                    <div style={{display: 'flex',flexDirection:"column", border: "2px solid red", padding: "40px 60px"}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                                <DatePicker

                                    value={date} onChange={(newV) => setDate(newV)}
                                    label="
                 Enter your data of birth"

                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <div style={{ width: "100%", textAlign: "right", marginTop: "10px" }}>
                            <Button variant={"contained"} onClick={() => {
                                dobContext.onDateChange(date)
                            }}>
                                Calculate
                            </Button>

                        </div>
                    </div>
                    </div>
                </div>











        </>
    )
}