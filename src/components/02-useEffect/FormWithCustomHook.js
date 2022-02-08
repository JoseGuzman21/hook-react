import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '', email: '', password: '',
    });

    const { name, email, password } = formValues;

    useEffect(() => {

        return () => {
            // second;
        };
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input type="text" name="name" className="form-control"
                    placeholder="Your name" value={name} autoComplete="off"
                    onChange={handleInputChange} />
                <input type="text" name="email" className="form-control mt-2"
                    placeholder="Your email" value={email} autoComplete="off"
                    onChange={handleInputChange} />
                <input type="password" name="password" className="form-control mt-2"
                    placeholder="Your password" value={password}
                    onChange={handleInputChange} />
            </div>

            <button className="btn btn-primary mt-2" type="submit"> Guardar </button>

        </ form>
    );
};
