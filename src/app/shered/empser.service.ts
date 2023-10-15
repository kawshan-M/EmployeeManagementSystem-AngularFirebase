import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserService {

  constructor(private firestore : AngularFirestore) { }

  addEmployee(employeeData: Employee) {
    return this.firestore.collection('employees').add(employeeData);
  }
}
