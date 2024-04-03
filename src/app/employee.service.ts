import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    Employee = [
      { id: 1, name: 'Diana', position: 'Software Engineer', department: 'Engineering', salary: 60000 },
      { id: 2, name: 'Adam', position: 'HR Manager', department: 'Human Resources', salary: 70000 },
      { id: 3, name: 'Neha', position: 'Marketing Specialist', department: 'Marketing', salary: 55000 },
      { id: 4, name: 'Reenu', position: 'Finance Analyst', department: 'Finance', salary: 65000 },
      { id: 5, name: 'Tanya', position: 'Operations Manager', department: 'Operations', salary: 75000 }
    ];
  constructor() { }
  
  getEmployeeDetails() {
    return this.Employee;
  }
}




 
 
 
 