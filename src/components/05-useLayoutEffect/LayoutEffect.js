import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css'

export const LayoutEffect = () => {

    const { state, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    let { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return <div>
        <h1>LayoutEffect</h1>

        <hr />

        {/* {loading && (<div className="alert alert-info text-center"> Loading ...</div>)} */}

        {/* {!loading &&  */}
        <blockquote className="blockquote text-end">
            <p className="mb-3" ref={pTag}> {quote}</p>
            {/* <footer className="blockquote-footer"> {author}</footer> */}
        </blockquote>
        {/* } */}

        <button className="btn btn-primary" onClick={increment}>
            Siguiente Quote
        </button>
    </div>;
};
