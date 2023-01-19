import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import "./BookTicket.css"

function BookTicket(){
    const [applicant, setApplicant] = useState("");
    const [passengers, setPassengers] = useState(1);
    const [pack, setPack] = useState(0);
    const packs = ["US East Coast", "Incredible India", "Utopian Europe"];
    const costs = [45000, 15000, 30000];
    // const [date, setDate] = useState();
    // console.log({applicant, passengers, pack, packName : packs[pack], cost : costs[pack] * passengers});

    function handleSubmit(){
        console.log({
            applicant, 
            passengers, 
            pack, 
            packName : packs[pack], 
            cost : costs[pack] * passengers,
            // date
        });
        if(applicant !== ""){
            // let printContents = document.getElementById('ticket_form').innerHTML;
            // let originalContents = document.body.innerHTML;
            // document.body.innerHTML = printContents;
            window.print();
            // document.body.innerHTML = originalContents; 
        }
        else{
            alert("Fill the details");
        }
    }

    return (<div>
        <center><h1>BookTicket</h1></center>
        <Box
            component="form"
            id="ticket_form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{
                width: "100%",
                padding : "10%"
            }}
            >
            <div style={{
                display:"flex",
                flexDirection:"row"
            }}> 
                <TextField
                    required
                    id="outlined-required"
                    label="Applicant Name"
                    defaultValue=" "
                    onChange={(e) => setApplicant(e.target.value)}
                    style={{
                        width:"50%"
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="No of Passengers"
                    defaultValue="1"
                    onChange={(e) => setPassengers(parseInt(e.target.value))}
                    style={{
                        width:"50%"
                    }}
                />
            </div>
            <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pack}
                    label="Age"
                    defaultValue={0}
                    onChange={(event) => setPack(event.target.value)}
                    style={{
                        width:"100%",
                        height:"25%",
                        justifyContent:"center"
                    }}>

                    <MenuItem value={0}>US East Coast</MenuItem>
                    <MenuItem value={1}>Incredible India</MenuItem>
                    <MenuItem value={2}>Utopian Europe</MenuItem>
                </Select>
                <br></br>
                <div className="cost">
                    <b>Total Cost is ₹{costs[pack] * passengers}/-</b>
                </div>
        </Box>
        <center>
            <button className="submit-btn" onClick={handleSubmit}>
                Book
            </button>
        </center>
        <br></br>
        <br></br>
    </div>);
}

export default BookTicket;