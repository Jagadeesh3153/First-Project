import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export class TableExample extends Component {
  render() {
    const headers= ["ID","Name", "Address", "Contact No"];
    const personList = [
        {id:101, name: "Jagadeesh", address: "Anna Nagar", contactNo:"7032163873"},
        {id:102, name: "Balaji", address: "Vadapalani", contactNo:"7032167467"},
        {id:103, name: "Satheesh", address: "Ashoknagar", contactNo:"7032163883"},
        {id:104, name: "Theja", address: "Redhills", contactNo:"7032163983"},
        {id:105, name: "Ajay", address: "Ambattur", contactNo:"7032163573"},
    ]   
    return (
      <div>
        <h1>TableExample</h1>
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        {headers.map((header)=>{
                            return<th>{header}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {personList.map((person)=>{
                        return<>
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.address}</td>
                            <td>{person.contactNo}</td>
                        </tr>
                        </>
                    })}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default TableExample