import React from "react";

const CurrentDay = ({ location, temperature, weatherIcon, weatherDescription, weatherPhoto }) => (
    <div>
        <div class="card mx-auto" style={{ width: "50vh" }}>
            <img src={weatherPhoto}
                class="card-img-top" alt="" />
            <div class="card-body">
            <h6>{location}<span class="material-icons-outlined">location_on</span></h6>
                <img width="45" src={weatherIcon} alt="Icono del tiempo" />
                <h2>
                <span class="material-icons-outlined">thermostat</span><span>{temperature}</span>ºC
                </h2>
                <h4>{weatherDescription}</h4>
            </div>
        </div>
    </div>
);

export default CurrentDay;