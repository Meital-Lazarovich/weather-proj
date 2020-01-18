import React, { Component } from 'react';
import { loadWeatherData } from '../actions/WeatherActions';
import { connect } from 'react-redux';

import WeatherList from '../components/WeatherList';
import SearchBar from '../components/SearchBar';

class WeatherApp extends Component {
    state = {
        isCurrLoc: true
    }

    componentDidMount() {
        this.findCurrLoc();
    }

    handleFilter = async (ev, val) => {
        this.setState({ isCurrLoc: false })
        ev.preventDefault();
        const loc = { city: val };
        this.props.loadWeatherData(loc);
    }

    findCurrLoc = async () => {
        await navigator.geolocation.getCurrentPosition(({coords}) => {
            this.props.loadWeatherData({ lat: coords.latitude, lon: coords.longitude })
        })
    }

    render() {
        const { weatherData } = this.props
        const { isCurrLoc } = this.state
        return (
            <section className="weather-app flex column">
                <SearchBar handleFilter={this.handleFilter} findCurrLoc={this.findCurrLoc} />
                {weatherData && (
                    <div className="content">
                        <h1 className="city semi">{weatherData.city}</h1>
                        {weatherData.forecasts.map((forecast, idx) => {
                            return <WeatherList key={idx} forecast={forecast} idx={idx} />
                        })}
                    </div>
                )}
                {(!weatherData && isCurrLoc) && <h1 className="err">Could not find your location. Please search by city name</h1>}
                {(!weatherData && !isCurrLoc) && <h1 className="err">Could not find this city. Please check your spelling and try again</h1>}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherData: state.weatherData,
    }
}

const mapDispatchToProps = {
    loadWeatherData
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherApp)
