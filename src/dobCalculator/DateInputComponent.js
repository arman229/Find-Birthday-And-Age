import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Button, CardContent, Typography} from "@mui/material";
import React, {useContext, useRef, useState} from "react";
import {DobContext} from "./DobApp";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import Grid from "@mui/material/Grid";

export const DateInputComponent = () => {
    const [date, setDate] = useState('');
    const dobContext = useContext(DobContext);

    return (<>
        <div>
            <Grid container>
                <Grid item xlg={6} lg={8} md={10} sm={12} xs={12} style={{marginLeft: "auto", marginRight: "auto"}}>
                    <div style={{
                        marginTop: "40px", padding: "30px", border: "2px solid gray",

                        borderTopRightRadius: "30px", borderTopLeftRadius: "30px", boxShadow: '5px 0 10px  #888888',

                    }}>

                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            border: "2px solid gray",
                            minWidth: "250px",
                            maxWidth: "350px",

                            marginLeft: "auto",
                            boxShadow: '5px 5px 10px #888888',
                            marginRight: "auto",
                            borderRadius: "10px"
                        }}>

                            <div>
                                <Typography variant={"h5"} style={{
                                 padding:"10px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",  backgroundColor: 'rgb(63 81 181 / 70%)'
                                }}>Birthday Calculator
                                </Typography>
                            </div>


                            <div style={{ padding: "40px 42px"}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={["DatePicker"]}>
                                    <DatePicker

                                        value={date} onChange={(newV) => setDate(newV)}
                                        label=" Enter your data of birth"

                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <div style={{textAlign: "right", marginTop: "10px"}}>
                                <Button variant={"contained"} onClick={() => {
                                    dobContext.onDateChange(date)
                                }}>
                                    Calculate
                                </Button>
                            </div>
                            </div>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>


    </>)
}