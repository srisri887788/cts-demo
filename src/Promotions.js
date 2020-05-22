import React, { Component } from 'react'
class Promotions extends Component {
    state = {
        employees: [
            //empty state of employees details
        ],
        isAPILoaded: false,
        payload: {
            name: "",
            isPromoted: true,
            salary: ""
        },
        totalSalaryCredited: 0
    }
    componentDidMount() {
        fetch('https://jsonblob.com/api/8005ded1-8918-11ea-813a-59c9a55087c0').then(response => response.json()).then(json => {
            setTimeout(() => {
                this.setState({
                    employees: [...json],
                    isAPILoaded: true
                })
            }, 2000)
        })

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.employees != this.state.employees){
            this.setState({
                totalSalaryCredited: this.state.employees.reduce((acc, item) => acc + parseInt(item.salary), 0)
            })

        }
        console.log(prevState, this.state)

    }
    updateData(e, index) {
        const { employees } = this.state;
        employees[index].isPromoted = e.target.checked;
        this.setState({ employees: [...employees] })
    }
    handleInput(e) {
        const { value, id } = e.target;
        this.setState({ payload: { ...this.state.payload, [id]: value } })

    }
    addEmployee() {
        const { employees, payload } = this.state
        this.setState({ employees: [...employees, payload] })
    }
    deleteEmployees() {
        const { employees } = this.state
        this.setState({ employees: employees.filter(employee => !employee.isPromoted) })
    }
    render() {
        const { employees, isAPILoaded,totalSalaryCredited} = this.state;

        return (
            <>
                {!isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" />) : (
                    <div>
                        <button type="button" class="btn btn-primary">
                            Total Salary <span class="badge badge-light">${
                                totalSalaryCredited
                            }</span>
                        </button>
                        <div class="container">
                            <div class="jumbotron text-center"><h1>Employee Promotion Details</h1></div>
                            {!employees.length ? (
                                <div class="alert alert-danger" role="alert">
No recocds found. Please add new item below                              </div>
                            ):(
                            <ul>
                                {employees.map(({ name, isPromoted, salary }, index) =>
                                    <li class="list-group-item ">
                                        <div class="row">
                                            <div class="col-3">{name}</div>
                                            <div class="col-3">${salary}</div>
                                            <div class="col-3"><input type="checkbox" onChange={(e) => this.updateData(e, index)} defaultChecked={isPromoted}></input>{!!isPromoted ? 'promoted' : 'not promoted'}</div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                            )}
                        </div>
                        <div className="row">
                            <div class="col">
                                <label htmlFor="ide">Employee Id</label>
                                <input type="text" onChange={(e) => this.handleInput(e)} className="form-control" id="name" placeholder="Enter name" />
                                <label htmlFor="ide">Salary</label>
                                <input type="text" onChange={(e) => this.handleInput(e)} className="form-control" id="salary" placeholder="Enter salary" />
                                <button type="button" onClick={() => this.addEmployee()} className="btn btn-primary">Add</button>
                                <button type="button" onClick={() => this.deleteEmployees()} className="btn btn-danger">Delete</button>

                            </div>
                            <div class="col">
                                <button type="button" class="btn btn-primary">
                                    Total Salary <span class="badge badge-light">{
                                        totalSalaryCredited
                                    }</span>
                                </button>
                            </div>
                        </div>
                    </div>

                )}
            </>
        )
    }
}


export default Promotions;
