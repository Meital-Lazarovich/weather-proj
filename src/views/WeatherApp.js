import React, { Component } from 'react';
import { loadForecasts } from '../actions/WeatherActions';
import { connect } from 'react-redux';


class WeatherApp extends Component {
    async componentDidMount() {
        await this.props.loadForecasts('london')
        if (!this.props.forecasts) {
            console.log('no forecasts');
        }
        else console.log('this.props.forecasts', this.props.forecasts);
    }

    render() {
        const { forecasts } = this.props
        return (
            <>
                {forecasts && forecasts.map((f, idx) => {
                    return (
                        <div key={idx}>
                            <img src={f.icon} alt={f.desc} title={f.desc} />
                            <h2>{f.date}, {f.hour}</h2>
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