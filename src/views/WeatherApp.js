import React, { Component } from 'react';
import { loadForecasts } from '../actions/WeatherActions';
import { connect } from 'react-redux';


class WeatherApp extends Component {
    async componentDidMount() {
        await this.props.loadForecasts('ramat gan')
        // if (!this.props.forecasts) {
        //     console.log('no forecasts');
        // }
        // else console.log('this.props.forecasts', this.props.forecasts);
    }

    render() {
        const { forecasts } = this.props
        return (
            <>
                {forecasts && forecasts.map((forecast, idx) => {
                    return (
                        <div key={idx}>
                            <div className="date">
                                <h2>{forecast.day}</h2>
                                <h4>{forecast.date}</h4>
                            </div>
                            {forecast.weathers.map((weather, idx) => {
                                return (
                                    <div key={idx}>
                                        <img src={weather.icon} alt={weather.desc} title={weather.desc} />
                                        <p>
                                            {weather.hour} | {weather.temp}&#176;C | {weather.desc}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        forecasts: state.forecasts,
    }
}

const mapDispatchToProps = {
    loadForecasts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherApp)