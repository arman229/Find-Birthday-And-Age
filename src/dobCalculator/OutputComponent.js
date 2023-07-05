import React, {useContext} from "react";
import {DobContext} from "./DobApp";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";


export const OutputComponent = () => {
    return (
        <>

            <div style={{ border: "2px solid gray", padding: '20px', width: '560px', marginLeft: "auto", marginRight: "auto" }}>
                <Typography variant="h5">Your day of birth </Typography>
                <div style={{ display: "flex", justifyContent: 'space-between', textAlign: 'center' }}>
                    <WeekDayOutput/>
                    <StatsComponent/>
                </div>
            </div>



        </>
    )
}


const WeekDayOutput = () => {
    const dobContext = useContext(DobContext)
    return (
        <>


            <Card   sx={{ width: 250, height: 300 }}>
                <CardContent  style={{backgroundColor:'red',padding:"4px"}}>
                    <Typography variant="h6">Day of birth</Typography>
                </CardContent>
                <CardMedia>
                    <div style={{ height: "100%" }}>
                        <img
                            src="https://www.thecalculatorsite.com/images/birthday-calculator/birthday-day.png"
                            alt="Age"
                            style={{ height: "170px", width: "auto",marginTop:'20px' }}
                        />
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography variant="body2"> {dobContext.dayOfWeek} </Typography>
                </CardContent>
            </Card>
        </>
    )
}
const StatsComponent = () => {
    const dobContext = useContext(DobContext)

    const backgroundStyle = {
        backgroundImage: `url(https://www.thecalculatorsite.com/images/birthday-calculator/birthday-age-cake.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        height: "230px",
        width: "auto",
        marginTop: "20px",
    };

    return (
        <>



            <Card sx={{ width: 250, height: 300 }}>
                <CardContent  style={{backgroundColor:'red',padding:"4px"}}>
                    <Typography    variant="h6">Your exact age  </Typography>
                </CardContent>
                <CardMedia>
                    <div style={{  height: "100%"  }}>
                        <div style={backgroundStyle}>
                            <div style={{ position:'relative', top:'80px',  textAlign:'center'}}>
                                <Typography style={{lineHeight:'1.5em'}}  variant="h6">days {dobContext.days}</Typography>
                                <Typography style={{lineHeight:'3.4em'}}   variant="h6">month {dobContext.months}</Typography>
                                <Typography style={{lineHeight:'2.2em'}} variant="h6">year {dobContext.years}</Typography>
                            </div>
                        </div>

                    </div>
                </CardMedia>

            </Card>
        </>

    )
}