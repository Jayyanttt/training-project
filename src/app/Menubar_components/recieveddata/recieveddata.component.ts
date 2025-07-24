import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recieveddata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recieveddata.html',
  styleUrls: ['./recieveddata.css']
})
export class Recieveddata implements OnInit {
  @Input() pdata: string | undefined;

  @Output() gdhsgd = new EventEmitter<any>();

 

  statename:any;

  ngOnInit(): void {
    // const ndata=this._fciservice.servicedata();
    // console.log(ndata);

   
    
  }

  sendata(val:string){
this.statename=val;
    console.log(this.pdata);
    this.gdhsgd.emit(this.statename);
  }

  
}
