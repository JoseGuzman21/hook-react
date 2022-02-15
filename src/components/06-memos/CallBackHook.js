import React, { useState,useCallback } from 'react'// import  from 'react/cjs/react.production.min'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    
    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter]);

    return (
        <div>
            <h1>CallBackHook: { counter }</h1>
            <hr />

            <ShowIncrement increment={increment} />

        </div>
    )
}
