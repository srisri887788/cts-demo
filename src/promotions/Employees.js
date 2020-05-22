import React, {useContext} from 'react';
import Employee from './Employee';
import { PromotionsContext } from "../context/PromotionsContext";


const Employees = () => {
    const {state: {employees}} = useContext(PromotionsContext);
    return (
        <>
            {!employees.length ? (
                <div className="alert alert-danger" role="alert">
                    No records found. Please add new item below </div>
            ) : (
                    <ul>
                        {employees.map((employee, index) =>
                            <Employee employee={employee} index={index}></Employee>
                        )}
                    </ul>
                )
            }
        </>
    )
}

export default Employees
