import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        const addTodo = {
            type: 'ADD_TODO',
            payload: newTodo
        }

        handleAddTodo(addTodo);

        reset();
    }


    return <>
        <h4> Agregar TODO </h4>
        <form onSubmit={handleSubmit}>
            <input className="form-control" onChange={handleInputChange}
                value={description}
                type="text" name="description" placeholder="Aprender ..." autoComplete="off" />
            <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
                Agregar
            </button>
        </form>
    </>
}
