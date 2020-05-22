import React, { useState, useEffect, useReducer } from 'react';
import Employees from '../promotions/Employees';
import reducer from '../reducers/reducer'

const useAPI = () => {
    const INITIAL_STATE = {
        employees:[],
        isAPILoaded:false,
        payload:{
            name: "",
            isPromoted: true,
            salary: ""
        },
        totalSalaryCredited:0
    }
    
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const {employees, isAPILoaded,payload,totalSalaryCredited} = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/d007bee3-96ca-11ea-a64f-2577e23890a0').then(response => response.json()).then(json => {
            setTimeout(() => {
                dispatch({type: 'API_SUCCESS', payload: {employees: [...json], isAPILoaded: true}})
            }, 2000)
        })
    }, []);

    useEffect((prevState) => {
       dispatch({type:'SET_TOTAL_SALARY'})
    }, [employees])
    
    const updateData = ({target}, index) => {
        dispatch({type:'UPDATE_DATA', payload: {index, target}})
    }
    const handleInput = ({target}) => {
        dispatch({type:'HANDLE_INPUT', payload: {target}})
    }
    const addEmployee = () => {
        dispatch({type:'ADD_EMPLOYEE'})
    }
    const deleteEmployees = () => {
        dispatch({type:'DELETE_EMPLOYEES'})
    }


    return {
        state,
        updateData,
        handleInput,
        addEmployee,
        deleteEmployees
    }

}
export default useAPI;