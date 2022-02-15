import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effects.css'

export const Memorize = () => {

    const { state, increment } = useCounter(10);

    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>  Counter: <small> <Small value={state} /> </small> </h1>
            <hr />

            <button className="btn btn-outline-primary" onClick={increment}>
                Increment
            </button>

            <button className="btn btn-outline-primary m-4" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>

    )
}
