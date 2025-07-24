import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recieveddata } from '../recieveddata/recieveddata.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FCIServices } from '../../Service/fci-services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-orignal',
  standalone: true,
  imports: [RouterOutlet,Recieveddata, CommonModule, HttpClientModule],
  templateUrl: './orignal.html',
  styleUrl : './orignal.css',
  
})
export class Orignal implements OnInit{
 
  data = "Hello from parent!";

  serviceData:any;

  ser_data:any;

   constructor(private _fciservice:FCIServices){}

  statename:any='delhi'

childsofdata:any;

   ngOnInit(): void {

    // const x = this._fciservice.data;
    this.ser_data = this._fciservice.servicedata();
    // console.log(this.ser_data);
    

    // console.log(x);

    
    // this._fciservice.getdata('getdailyprocurementreport/2/2025-2026/1/2').subscribe(res=>{
    //   console.log(res);
    //   this.serviceData=res;

    // });

    this._fciservice.getdata('getdailyprocurementreport/2/2025-2026/1/2').subscribe((res:any)=>{

      
      this.serviceData = res[0].benefitted_quantity;
      console.log(this.serviceData);
      
    });
    
  }

  

  getchilddata(val:any){
   
this.childsofdata = val;
}
  
}
