import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data:any=[];
  constructor() {
   
 
 


  }
  
  title = 'demoProj';
  city: number;
  // redirect() {
  //   debugger
  //   this.router.navigate(["/collections" + this.city]);
  // }
}
