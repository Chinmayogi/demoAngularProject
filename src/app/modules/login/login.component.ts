import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../../services/demoservice.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private demo: DemoService, private router: Router, private global: GlobalService) { }

  ngOnInit(): void {

    // this.sortArr();
    this.global.removeUser();
    this.connectApi();
  }
  connectApi() {

    this.demo.connect({
      'id': 2
    }).subscribe((data: any) => {
      console.log(data);
    })
  }

  login() {
    this.global.setUser();
    this.router.navigate(['dashboard']);
  }
  out() {
    this.global.removeUser();
  }

//   sortArr() {
//     let arr = [4, 3, 6, 45, 3, 8, 1, 9, 67];
//     var temp = 0;
//     for (let index = 0; index < arr.length; index++) {
//       const element = arr[index];

//       for (let index1 = 0; index1 < arr.length; index1++) {
//         const element1 = arr[index1];
//         if (arr[index1] < arr[index]) {
//           temp = arr[index1];
//           arr[index1] = arr[index];
//           arr[index] = temp;

//         }

//       }

//     }
// console.log('arr',arr) ;


//   }
}
