import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css'
})
export class TemplateDriven  {

  f_name:any='';
  s_name:any='';
  age:number | undefined;
  loca:any;
  mobile:any;

  bankData:string='My Name <a href="www.cfpp.nic.in" target="_blank">FCI</h1>';
  

  getuserData(val:any){
    console.log(val.controls['age'].value);
    
    this.f_name = val.controls['f_name'].value;
    this.s_name = val.controls['s_name'].value;
    this.age = val.controls['age'].value;
    this.loca = val.controls['loca'].value;
    this.mobile = val.controls['mobile'].value
   
    

  }

}
