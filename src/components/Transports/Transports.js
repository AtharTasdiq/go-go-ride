import React from 'react';
import { useState, useEffect } from 'react';
import fakeData from "../../fakeData";
import Vehicles from '../Vehicles/Vehicles';
import "./Transports.css";


const Transports = () => {
   const [transports, setTransports] = useState([]);

    useEffect(()=>{
         setTransports(fakeData);
         //console.log(transports);    
    },[transports])
     
    return (
        <div className="items">
            {
                transports.map(transport=><Vehicles transport={transport} key={transport.key}></Vehicles>)
            }
        </div>
    );
};

export default Transports;