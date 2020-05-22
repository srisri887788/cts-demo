import React, { useContext } from 'react';
import TotalSalary from "./TotalSalary";
import Employees from "./Employees";
import Loader from './Loader';
import EmployeeForm from "./EmployeeForm";
import Stringify from '../Stringify';
import { PromotionsContext } from "../context/PromotionsContext";
const PromotionsWithHooks = () => {
    const {
        addEmployee,
        deleteEmployees,
        updateData,
        handleInput,
        state: { employees, payload, isAPILoaded }
    } = useContext(PromotionsContext);

    return (
        <>
            {!isAPILoaded ? (<Loader />) : (
                <div>
                    <TotalSalary></TotalSalary>
                    <div className="container">
                        <div className="jumbotron text-center"><h1>Employee Promotion Details</h1></div>
                        <Employees></Employees>
                    </div>
                    <div className="row ">
                        <div class="col ml-3">
                            <Stringify context={payload}></Stringify>
                            <EmployeeForm addEmployee={addEmployee} handleInput={handleInput} deleteEmployees={deleteEmployees} ></EmployeeForm>
                        </div>
                        <div class="col">
                            <TotalSalary></TotalSalary>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default PromotionsWithHooks

