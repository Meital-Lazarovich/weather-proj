import React, { useState } from 'react'

export default function LocFilter({ handleFilter, findCurrLoc }) {
    const [loc, setLoc] = useState('');

    const submitForm = (ev) => {
        ev.preventDefault();
        handleFilter(loc);
        setLoc('');
    }

    return (
        <section className="search-bar flex space-between wrap">
            <form onSubmit={ev => submitForm(ev)}>
                <input type="text" placeholder="Enter city name" onChange={ev => setLoc(ev.target.value)} value={loc}/>
                <button type="submit" className="bold">Go</button>
            </form>
            <button className="my-location semi" onClick={() => findCurrLoc()}>My location</button>
        </section>
    )
}