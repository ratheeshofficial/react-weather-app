import React from "react";
import axios from 'axios'

export default function WeatherApp(){

    const apiKey = `f4c6b0ec97e0968f762e5dfc78f78150`
    const [cityName,setCityName] = React.useState('')

    const [weatherApi,setWeatherApi] = React.useState([])

    const weather =() => {
        if(cityName.length > 2 ){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then((result) => {
            setWeatherApi([...weatherApi, result.data])
            })
        }
    }

    const cityHandler = (event) =>{
        setCityName(event.target.value)
    }
    console.log(weatherApi)

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-lg-5 text-center">
                        <h3>Weather App</h3>
                        <input type='text' placeholder='Enter City Name' onChange={cityHandler} />
                        <button onClick={weather}>Search</button>
                        {/* <p>{weatherApi&&weatherApi.city?weatherApi.city.name :null}</p> */}
                        {weatherApi && weatherApi.length > 0 ? 
                        weatherApi.map((weather) => {
                        return(
                            <>
                            
                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-4 text-center">
                                    <div className="card border-dark my-lg-5">
                                        <div className="card-header">Current Weather</div>
                                        <div className="card-body text-dark">
                                            {/* <h5 className="card-title">qqqq</h5> */}
                                            <p key={`weather ${weather.city.id}`}>Country : {weather.city.country}</p>
                                            <p className="card-text">Latitude : {weather.city.coord.lat}</p>
                                            <p className="card-text">Longitude : {weather.city.coord.lon}</p>
                                            <p>City : {weather.city.name}</p>
                                            <p>Temp : {Math.round(weather.list[weather.list.length-1].main.temp / 10)}</p>
                                            <p>{weather.list[weather.list.length-1].weather.map((weather)=> {
                                                return <p>Weather : {weather.main}</p>
                                            })} </p>
                                            {/* {weather && weather.list.map((res) => {
                                                 console.log(res.main)
                                                return <p>{res.main.temp}</p>
                                            })} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            </>
                            )
                        })
                        : null }
                    </div>
                </div>
            </div>
        </>
    )
}