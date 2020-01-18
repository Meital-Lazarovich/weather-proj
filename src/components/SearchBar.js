import React, { useState } from 'react'

export default function LocFilter({ handleFilter }) {
    const [loc, setLoc] = useState('');

    return (
        <section className="search-bar flex space-between wrap">
            <form onSubmit={ev => handleFilter(ev, loc)}>
                <input type="text" placeholder="Enter city name" onChange={ev => setLoc(ev.target.value)} />
                <button type="submit" className="bold">Go</button>
            </form>
            <button className="my-location semi">My location</button>
        </section>
    )
}