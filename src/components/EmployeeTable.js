import React, { Component } from 'react'

class EmployeeTable extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         employees: [
            { id: 1, name: 'Jim', email: 'jim@email.com' },
            { id: 2, name: 'Pam', email: 'pam@email.com' },
            { id: 3, name: 'Dwight', email: 'dwight@email.com' },
            { id: 4, name: 'Craig', email: 'craig@email.com' }
         ]
      }
   }

   renderTableData() {
      return this.state.employees.map((employees, index) => {
         const { id, name, email,} = employees 
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{email}</td>
               <td><button type = "button">Delete</button></td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Employee Table</h1>
            <textarea id = "name" placeholder = "name"></textarea>
            <textarea id = "email" placeholder = "email"></textarea>
            <button className = "addBtn" type = "button">Add</button>
            <table id='employees'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default EmployeeTable