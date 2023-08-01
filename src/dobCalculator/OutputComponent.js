import React, {useContext} from "react";
import {DobContext} from "./DobApp";
import './outputcomponent.css';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export const OutputComponent = () => {

    return (
        <>
            <Grid container >
                <Grid item xlg={6} lg={8} md={10} sm={12} xs={12}  style={{marginLeft:"auto",marginRight:"auto",marginBottom:"40px"}}>
            <div style={{ border: "2px solid gray", padding: '20px', borderBottomRightRadius:"30px",  borderBottomLeftRadius:"30px", boxShadow: '5px 5px 10px #888888'}}>

                <div    className={'flexstyle'}>
                    <WeekDayOutput  />
                    <StatsComponent  />
                </div>
            </div>
                </Grid>
            </Grid>


        </>
    )
}


const WeekDayOutput = () => {
    const dobContext = useContext(DobContext)
    return (
        <>


            <Card style={{boxShadow: '5px 5px 10px #888888' }}  sx={{ width: 300, height: 380 }}>
                <CardContent  style={{backgroundColor:'rgb(63 81 181 / 70%)',padding:"4px"}}>
                    <Typography variant="h6">Day of birth</Typography>
                </CardContent>
                <CardMedia>
                    <div style={{ height: "100%" }}>
                        <img
                            src="https://www.thecalculatorsite.com/images/birthday-calculator/birthday-day.png"
                            alt="Age"
                            style={{ height: "230px", width: "auto",marginTop:'40px' }}
                        />
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography variant="h9"> {dobContext.dayOfWeek} </Typography>
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
        height: "325px",

        width: "auto",

    };

    return (
        <>



            <Card sx={{ width: 300, height: 380 }}  style={{boxShadow: '5px 5px 10px #888888'}}>
                <CardContent  style={{backgroundColor:'rgb(63 81 181 / 70%)',padding:"4px"}}>
                    <Typography    variant="h6">Your exact age  </Typography>
                </CardContent>
                <CardMedia>
                    <div style={{   }}>
                        <div style={backgroundStyle}>
                            <div style={{ position:'relative', top:'80px',  textAlign:'center'}}>
                                <Typography style={{lineHeight:'2.9em'}}  variant="h6">days {dobContext.days}</Typography>
                                <Typography style={{lineHeight:'3.9em'}}   variant="h6">month {dobContext.months}</Typography>
                                <Typography style={{lineHeight:'2.8em'}} variant="h6">year {dobContext.years}</Typography>
                            </div>
                        </div>

                    </div>
                </CardMedia>

            </Card>
        </>

    )
}