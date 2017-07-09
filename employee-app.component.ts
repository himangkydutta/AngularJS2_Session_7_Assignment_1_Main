import {Component} from '@angular/core';
import {Employee} from './Models/employee';
import {AppComponent} from './person-app.component';

@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html'
})

export class EmployeeComponent{
   title:string;
   submitted:boolean;
    //Two Property Binding
    empObj:Employee = new Employee();

    // employee collection
    employees: Array<Employee> = new Array<Employee>();

    empObj1:AppComponent = new AppComponent();
    employeesT: Array<AppComponent> = new Array<AppComponent>();

    AddEmployee(){
        this.employees.push(this.empObj);
        this.empObj = new Employee();
    }

    createTitle () {
      this.employeesT.push(this.empObj1);
      this.empObj1 = new AppComponent();
      this.submitted = true;
      this.title = this.empObj1.appTitle;
    }

    
}