import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return <div>
        <h1>Real example ref</h1>
        <hr />

        <button className="btn btn-primary mb-2" onClick={() => setShow(!show)}>
            Show/Hide
        </button>

        {show && <MultipleCustomHooks />}

    </div>;
};
