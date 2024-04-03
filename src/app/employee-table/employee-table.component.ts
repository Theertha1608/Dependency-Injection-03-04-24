import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
  export class EmployeeTableComponent implements OnInit {
    employees: any[] = [];
  
    constructor(private employeeService: EmployeeService) { }
  
    ngOnInit(): void {
      this.employees = this.employeeService.getEmployeeDetails();
    }
  }

