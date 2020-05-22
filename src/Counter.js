import React, { useState, useReducer } from 'react'

const Counter = () =>  {
    const INITIAL_STATE ={
        counter: 0
    }
    const reducer = (state, action) => {
        const {type, payload} =action

        switch (type) {
            case 'INCREMENT_COUNTERS':{
                return {
                    ...state, 
                    counter: payload.counter
                }
            }
            case 'DECREMENT_COUNTERS':{
                return {
                    ...state, 
                    counter: payload.counter
                }
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const incrementCounter = () => {
        dispatch({
            type: 'INCREMENT_COUNTERS',
            payload: {counter: 10}
        })
    }
    const decrmentCounter = () => {
        dispatch({
            type: 'DECREMENT_COUNTERS',
            payload: {counter: 5}
        })
    }
    const {counter} = state;
    return (
        <div>
            {JSON.stringify(state, null, 4)}
            
            {!!counter && (
                <button type="button" onClick={decrmentCounter} className="btn btn-primary">-</button>
            )}
            &nbsp;
            <span className="badge badge-success">
                {counter}
            </span> &nbsp;               
            <button type="button" onClick={incrementCounter} className="btn btn-primary">+</button>

        </div>
    )
}

export default Counter