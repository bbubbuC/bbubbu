import axios from "axios";
import React, { useEffect } from "react";

const Weather = () => {
    function Api (position) {
        const apiKey = "6cab2eaf7f981918390ab25e4cbb5ee8";
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        axios.get(url).then((response => console.log(response)))
    }

    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(Api);
    },[])
    
    return (
        <div>Weather</div>
    )
}

export default Weather