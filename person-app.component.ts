import { Component } from '@angular/core';  

@Component({ 
   selector: 'demo-app', 
   templateUrl: './Views/person-app.component.html'  
}) 

export class AppComponent { 
   appTitle: string = "Miss"; 
   appStatus: boolean = true; 

   
}