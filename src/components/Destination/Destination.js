import { TextField } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import fakeData from "../../fakeData";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Destination.css";
import MapComponent from "../MapComponent/MapComponent";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      background: 'white',
    },
  },
  textField: {
      margin: theme.spacing(1),
      width: '25ch',
      background: "white",
  },
}));





const Destination = () => {
    const {vehiclekey} = useParams();
    const vehicle = fakeData.find( vehicles => vehicles.key === vehiclekey);
    //console.log(vehicle);
    const {transport, icon , image,} = vehicle;
    const classes = useStyles();

    const showDestination = () =>{
        const fromDestination = document.getElementById("fromID").value;
        const toDestination = document.getElementById("toID").value;
        const timeDate = document.getElementById("datetime-local").value;
        const showDestinationDiv = document.createElement("div");
        showDestinationDiv.className = "show-destination";
        showDestinationDiv.innerHTML = `
             <div> 
               <h1>From <span class="highlighted">${fromDestination}</span> to
               <span class="highlighted">${toDestination}</span>. Schedule : 
               <span class="highlighted">${timeDate}</span>
               </h1>
               <div class="innerthing">
                   <div class="eachItem"><img class="spacing" src=${image} alt=""> <h3 class="spacing">${transport}</h3> <img class="spacing" src=${icon} alt=""> <h3 class="spacing">4  $64</h3></div>
                   <div class="eachItem"><img class="spacing" src=${image} alt=""> <h3 class="spacing">${transport}</h3> <img class="spacing" src=${icon} alt=""> <h3 class="spacing">4  $64</h3></div>
                   <div class="eachItem"><img class="spacing" src=${image} alt=""> <h3 class="spacing">${transport}</h3> <img class="spacing" src=${icon} alt=""> <h3 class="spacing">4  $64</h3></div>
               </div>
             </div>
        `;
        const finalDestination = document.getElementById("finalDestination");
        const hideDisplay = document.getElementById("finalDestinationForm");
        hideDisplay.innerHTML = "";
        finalDestination.appendChild(showDestinationDiv);
        
    
   } 


    return (
        <div className="">
            <div id="finalDestinationForm">
            <form  className={classes.root} noValidate autoComplete="off">

               <TextField 
               required
               id="fromID" 
               label="Pick From" 
               variant="filled"/>


               <br></br>

               <TextField id="toID" label="Pick To" variant="filled" />
               <br></br>

               <TextField
                id="datetime-local"
                label="Picking Time"
                type="datetime-local"
                defaultValue="2021-03-20T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
               />
        
               <br></br>
                   <Button 
                   variant="contained"
                   color="primary"
                   onClick={()=> showDestination(vehicle.transport)} 
                   style={{background: "#D47F00", color:"black"}} 
                   className="gobtn">

                       Let's Go
                   </Button>
             </form>

            </div>
            <div className="destinationdiv">
                 <div id="finalDestination">

                </div>
                {/* <div className="map">
                       <iframe title="Map" width="700" height="500" src="https://api.maptiler.com/maps/basic/?key=b5XhLfdKWwo3GGmmmgHr#1.0/0.00000/0.00000"></iframe>
                </div> */}
                <MapComponent className="map"></MapComponent>
            </div>
             
             
        </div>
  
    );
};
 
export default Destination;
