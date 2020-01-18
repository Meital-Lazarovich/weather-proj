import React from 'react';

export default function WeatherPreview({ weather }) {
    return (
        <section className="weather-preview flex-center column">
            <p className="hour">{weather.hour}</p>
            <img className="icon" src={weather.icon} alt={weather.desc} title={weather.desc} />
            <p className="temp">{weather.temp}&#176;C</p>
            <p className="desc">{weather.desc}</p>
        </section>
    )
}