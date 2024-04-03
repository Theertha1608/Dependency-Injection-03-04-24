import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, EmployeeTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    employeeDetails: any[] = [];
  
    constructor(private empService: EmployeeService) {}
  
    ngOnInit(): void {
      this.employeeDetails = this.empService.getEmployeeDetails();
    }
  }