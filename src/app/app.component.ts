import { Component , ViewChild ,OnInit} from '@angular/core';
import { EmpserService } from './shered/empser.service';
import { MessageService } from 'primeng/api';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { NavComponent } from './features/nav/nav.component';
import { SidebarService } from './shered/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-management-system';
  sidebarVisible: boolean = false;
  testClass: string = "no-margin";

  employees: any[] = [];


  constructor(private data: EmpserService,private auth: AngularFireAuth, private navComponent: NavComponent,private sidebarService: SidebarService) {
    this.navComponent.sidebarToggled.subscribe(() => {
      this.toggleSidebar();
    });
    
  }
  ngOnInit() {
    this.sidebarService.isSidebarShow.subscribe((res: boolean) => {
      if (res){
        this.testClass="no-margin"
      }else{
        this.testClass="add-margin"
      }
      console.log("work side bar",res);
    });
  }

  test(isSidebarShow : any){
    console.log("work side bar",isSidebarShow);
  }


  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  
    if (this.sidebarVisible) {
      document.querySelector('.app-with-sidebar')!.classList.add('sidebar-open');
    } else {
      document.querySelector('.app-with-sidebar')!.classList.remove('sidebar-open');
    }
  }

  

  
  
}
