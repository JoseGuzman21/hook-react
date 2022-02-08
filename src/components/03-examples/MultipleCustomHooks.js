import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { state, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

    let { author, quote } = !!data && data[0];

    return <div>
        <h1>Breaking Bad Quotes</h1>
        
        <hr />

        {loading && (<div className="alert alert-info text-center"> Loading ...</div>)}

        {!loading && <blockquote className="blockquote text-end">
            <p className="mb-3"> {quote}</p>
            <footer className="blockquote-footer"> {author}</footer>
        </blockquote>}

        <button className="btn btn-primary" onClick={increment}>
            Siguiente Quote
        </button>
    </div>;
};
