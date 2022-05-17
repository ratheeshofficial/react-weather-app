import React from "react";
import axios from 'axios'



export default function WeatherApp(){

    const apiKey = `f4c6b0ec97e0968f762e5dfc78f78150`
    const [cityName,setCityName] = React.useState('')

    const [weatherApi,setWeatherApi] = React.useState({})

    React.useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then((result) => setWeatherApi(result.data))
    },[cityName])

    const cityHandler = (event) =>{
        setCityName(event.target.value)
    }
    console.log(cityName)

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-lg-5 text-center">
                        <h3>Weather App</h3>
                        <input type='text' placeholder='Enter City Name' onChange={cityHandler} />
                        <p>{}</p>
                    </div>
                </div>
            </div>
        </>
    )
}