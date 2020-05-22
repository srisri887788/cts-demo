const reducer = (state, action) => {
    const {type, payload: context} =action
    const {employees, payload} = state;

    switch (type) {
        case 'API_SUCCESS':{
            return {
                ...state,
                ...context
            }
        }
        case 'SET_TOTAL_SALARY':{
            return {
                ...state,
                totalSalaryCredited: employees.reduce((acc, item) => acc + parseInt(item.salary), 0)
            }
        }
        case 'UPDATE_DATA':{
            const {target, index} = context
            employees[index].isPromoted = target.checked;
            return {
                ...state,
                employees: [...employees]
            }
        }
        case 'HANDLE_INPUT':{
            const {target: {id, value}} = context
            return {
                ...state,
                payload: { ...payload, [id]: value }
            }
        }
        case 'ADD_EMPLOYEE':{
            return {
                ...state,
                employees: [...employees,payload]
            }
        }
        case 'DELETE_EMPLOYEES':{
            return {
                ...state,
                employees: [...employees.filter(employee => !employee.isPromoted)]
            }
        }
        default: {
            return state
        }
    }
}

export default reducer