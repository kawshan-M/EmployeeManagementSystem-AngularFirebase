import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Timestamp } from '@firebase/firestore'; 
import { Employee } from 'src/app/model/employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataList: any[] = []; 

  isEditing: boolean = false;
  sidebarVisible = false;
  selectedEmployee: Employee;
  visible: boolean = false;
  employeeData: Employee = new Employee();

  showDialog() {
    this.visible = true;
}

  editEmployee(selectedEmployee: Employee,employeeId: string) {
  this.selectedEmployee = { ...selectedEmployee };
  this.showDialog();
}

  constructor(private firestore: AngularFirestore,private messageService: MessageService, private datePipe: DatePipe) {
    this.selectedEmployee = new Employee();
   }

   toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  fetchDataFromFirestore() { 
    this.firestore.collection('employees').snapshotChanges().subscribe((data: any[]) => {
      this.dataList = data.map((item: any) => {
        const id = item.payload.doc.id; // Get the document ID
        const data = item.payload.doc.data();

        data.dateOfBirth = data.dateOfBirth.toDate();
        return { id, ...data }; // Include the ID in the data
      });
    });
  }

  ngOnInit(): void {
    this.fetchDataFromFirestore();
  }

  deleteEmployee(employeeId: string) {
    const employeeRef = this.firestore.collection('employees').doc(employeeId);
    employeeRef.delete().then(() => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee deleted successfully' });
    }).catch((error) => {
      console.error('Error deleting employee:', error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error deleting employee' })
    });
  }

  // Function to initiate editing
  updateEmployee() {
    const employeeDataObject = { ...this.selectedEmployee };
    this.firestore
      .collection('employees')
      .doc(this.selectedEmployee.id) // Use the document ID of the selected employee
      .update(employeeDataObject) // Use update() to update the existing document
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee updated successfully in Firebase' });
        this.visible = false;
      })
      .catch((error) => {
        console.error('Error updating employee in Firebase:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error updating employee in Firebase' });
      });
  }


  
  
}
