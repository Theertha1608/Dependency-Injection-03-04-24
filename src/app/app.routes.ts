import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export const routes: Routes = [
    {
        path: ' ', 
        component: EmployeeTableComponent,
    }
];
