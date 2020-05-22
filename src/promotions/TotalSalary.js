import React, {useContext} from 'react';
import { PromotionsContext, PromotionsProvider } from "../context/PromotionsContext";


const TotalSalary = () => {
    const {state: {totalSalaryCredited}} = useContext(PromotionsContext);
    return (
        <button type="button" class="btn btn-primary">
            Total Salary <span class="badge badge-light">{
                totalSalaryCredited
            }</span>
        </button>
    )
}

export default TotalSalary
