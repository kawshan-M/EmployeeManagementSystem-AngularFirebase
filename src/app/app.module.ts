import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DividerModule } from 'primeng/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from 'src/app/shered/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './features/nav/nav.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageModule } from 'primeng/image';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DatePipe } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { EmployeeEditComponent } from './features/employee-edit/employee-edit.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SigninComponent } from './features/signin/signin.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { IonicModule } from '@ionic/angular';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    SigninComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    SplitterModule,
    ToastModule,
    PanelMenuModule,
    ImageModule,
    CardModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    RadioButtonModule,
    CalendarModule,
    SidebarModule,
    DropdownModule,
    DividerModule,
    DatePipe,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    IonicModule.forRoot(),
  ],
  providers: [
    MessageService,
    DatePipe,
    AuthService,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
