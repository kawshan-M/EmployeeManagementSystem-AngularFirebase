import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EmpserService } from 'src/app/shered/empser.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { SidebarService } from 'src/app/shered/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  selectedLanguage: string = 'en'; 
  languages: { label: string, value: string }[] = [
    { label: 'English', value: 'en' },
    { label: 'සිංහල', value: 'si' },
  ];
  employeeData: Employee = new Employee();
  date: Date | undefined;
  visible: boolean = false;
  sidebarVisible: boolean = false;
  countries: any[] | undefined;
  selectedCountry: string | undefined;
  sidebarToggled = new EventEmitter<boolean>();

    showDialog() {
        this.visible = true;
    }

  constructor(private translate: TranslateService, private router: Router,private firestore: AngularFirestore,private dataService: EmpserService,private messageService: MessageService,private sidebarService: SidebarService) { 
    translate.setDefaultLang('en');
  }

  toggleSidebar() {
    this.sidebarService.isSidebarShow.next(this.sidebarVisible);
    console.log("work");
  }
  
  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }
  

  ngOnInit(): void {
  
    
  }

  saveEmployee() {
    const employeeDataObject = { ...this.employeeData };
  
      this.firestore
      .collection('employees')
      .add(employeeDataObject)
      .then(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee added successfully to Firebase' });
        this.visible = false;
      })
      .catch((error) => {
        console.error('Error adding employee to Firebase:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error adding employee to Firebase' })
      });
  }

  openForms() {
    this.router.navigate(['/']);
  }

  
}
