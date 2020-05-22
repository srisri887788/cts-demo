import React, { Component } from 'react';
import Tbody from "./Tbody";
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table: {...this.props},
            formData: {
                start: '',
                end: ''
            }
        }

    }
    updateTable(){
        const {table, formData} = this.state;
        this.setState({
            table: {
                ...table,
                ...formData
            },
            formData: {
                start: '',
                end: ''
            }
        });
    }
    handleInput(e){
        const {target: {
            value,
            id
        }} = e;
        this.setState({formData: {...this.state.formData, [id]:value}})
    }
    render() {
        console.log("hey  i am calling myself");
        const { table: {start = 2, end = 10}, formData } = this.state;
        return (
            <div>
                <table class="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">start</th>
                            <th scope="col"></th>
                            <th scope="col">end</th>
                            <th scope="col">value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [... new Array(parseInt(end))].map((item, index) => (
                                <Tbody start={start} index={index}></Tbody>
                            ))
                        }
                    </tbody>
                </table>
                <pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>
                <br />
                <div className="form-group">
                    <label for="start">Table starts with</label>
                    <input type="text" className="form-control" value={formData.start} onChange={(e) => this.handleInput(e)} id="start" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="end">Ends with</label>
                    <input type="text" value={formData.end} onChange={(e) => this.handleInput(e)} className="form-control" id="end" />
                </div>
                <button type="button" onClick={() => this.updateTable()} className="btn btn-primary">Submit</button>
            </div>
        )
    }
}


export default Table
