import React from 'react';

import WeatherPreview from './WeatherPreview'

export default function WeatherList({ forecast, idx }) {
    return (
        <section className={"weather-list flex column idx-" + idx}>
            <h2>
                <span className="date semi">{forecast.day} - {forecast.date}</span>
            </h2>
            <div className="weathers flex wrap">
                {forecast.weathers.map((weather, idx) => {
                    return (
                        <WeatherPreview weather={weather} key={idx}></WeatherPreview>
                    )
                })}
            </div>
        </section>
    )
}