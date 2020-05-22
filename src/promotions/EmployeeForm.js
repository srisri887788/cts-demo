import React, { Fragment } from 'react'

const EmployeeForm = ({handleInput, addEmployee, deleteEmployees}) => {
    return (
        <Fragment>


            <label htmlFor="ide">Employee Id</label>
            <input type="text" onChange={handleInput} className="form-control" id="name" placeholder="Enter name" />
            <label htmlFor="ide">Salary</label>
            <input type="text" onChange={handleInput} className="form-control" id="salary" placeholder="Enter salary" />
            <button type="button" onClick={addEmployee} className="btn btn-primary mt-3">Add</button>
            <button type="button" onClick={deleteEmployees} className="btn btn-danger ml-3 mt-3">Delete</button>

        </Fragment>
    )
}

export default EmployeeForm
