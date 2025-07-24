import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {

  rescolor:any;
mynum:number=0;

ngOnInit(): void {
  this.rescolor = 'heading';
}


}
