import React from "react";
// import styles from './Info.module.css';

import CurrentDay from "../CurrentDay/CurrentDay";

const Info = ({ forecast }) => (
    <div class="my-5">
        <CurrentDay {...forecast.currentDay} />
        <a href="/" >
            <button type="button" class="btn btn-primary mt-4" >BUSCAR OTRA CIUDAD</button>
        </a>
    </div>
);

export default Info;