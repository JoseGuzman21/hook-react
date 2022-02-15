import React, { useReducer, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';
import './style.css';
import { TodoList } from './TodoList';

const init = () => {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {
        const deleteTodo = {
            type: 'REMOVE_TODO',
            payload: todoId
        }

        dispatch(deleteTodo);

        reset();
    }

    // const handleAddTodo = (newTodo) => {
    //     dispatch({
    //         type: 'ADD_TODO',
    //         payload: newTodo
    //     })
    // }

    const handleToggle = (todoId) => {
        const toggleTodo = {
            type: 'DONE_TODO',
            id: todoId
        }

        dispatch(toggleTodo);
    }

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

        dispatch(addTodo);

        reset();
    }

    return (
        <div>
            <h1>Todo App ({todos.length}) </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList key={todos.id} todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
                </div>
                <div className="col-5">
                    <h4> Agregar TODO </h4>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" onChange={handleInputChange}
                            value={description}
                            type="text" name="description" placeholder="Aprender ..." autoComplete="off" />
                        <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
                            Agregar
                        </button>
                    </form>
                    {/* <TodoAdd handleAddTodo={handleAddTodo} /> */}
                </div>
            </div>
        </div>
    )
}
