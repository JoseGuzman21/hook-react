import React, { useState, useMemo } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

    const { state, increment } = useCounter(500);

    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h1>  Counter: {state} </h1>
            <hr />

            <p> {memoProcesoPesado} </p>

            <button className="btn btn-outline-primary" onClick={increment}>
                Increment
            </button>

            <button className="btn btn-outline-primary m-4" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>

    )
}
