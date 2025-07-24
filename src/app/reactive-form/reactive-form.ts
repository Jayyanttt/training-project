import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FCIServices } from '../Service/fci-services';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

rect_form:FormGroup;

fname:any;
sname:any;
age:any;
address:any;
mobile:any;

reactform:any='OM PRAKASH';
mybob:any='01-02-2025';

crdate:any='2000-01-01T00:00:00';

newdata:any=123456789;

datamodle:any={};


constructor(private _fb:FormBuilder, private my_service:FCIServices){

this.rect_form=this._fb.group({

  f_name:['', Validators.required],
  s_name:['', Validators.required],
  age:['', Validators.required],
  loca:['', Validators.required],
  mobile:['', Validators.required]

})




  }

 getuserData(){

this.fname = this.rect_form.controls['f_name'].value;
this.sname = this.rect_form.controls['s_name'].value;
this.age = this.rect_form.controls['age'].value;
this.address = this.rect_form.controls['loca'].value;
this.mobile = this.rect_form.controls['mobile'].value;

this.datamodle={
  fname:this.fname,
  sname:this.sname,
  age:this.age,
  add:this.address,
  phone:this.mobile,
}

console.log(this.datamodle);

this.my_service.postdata('baseurl', this.datamodle);


 }

}
