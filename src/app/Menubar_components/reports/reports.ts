import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {

  title1='om'
  // apidata=[
  //   {id:1, name:'a', age:20, mobile: 8767656767},
  //   {id:2, name:'b', age:20, mobile: 8767656767},
  //   {id:3, name:'c', age:20, mobile: 87676567},
  //   {id:4, name:'d', age:20, mobile: 8767656767},
  //   {id:5, name:'e', age:20, mobile: 8767656767}
  // ]

    apidata=[
    { name:'a', age:20, mobile: 8767656767},
    { name:'b', age:20, mobile: 8767656767},
    { name:'c', age:20, mobile: 87676567},
    { name:'d', age:20, mobile: 8767656767},
    { name:'e', age:20, mobile: 8767656767}
  ];

  // datatype>: any, number, string, boolean, 


  // age:number=25;

  // age:number=5;

  // firstname:string='Deep'
  // firstname:string=true

  // status:boolean='true'

  // myData:any=true

  // var, let and const;
  //  var y =0;
  //   y=10;

  getmydata(){

    let y =100;
    y =1000;
    const x =100;
    

     const z =1500;
   
   console.log(y);
  }

  mydata1(){
    const x =100;
  }
  

  // data communication in angular:

  // 1. Parent to child.
  // 2. child to parent.

}
