import { Component, OnInit ,Input} from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  @Input() employeeData: Employee = new Employee();
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
