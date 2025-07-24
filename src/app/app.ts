import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, } from '@angular/router';
import { Header } from './components/shared/components/header/header';
import { Footer } from './components/shared/components/footer/footer';
import { Layout } from './components/shared/components/layout/layout';
import { Menubar} from './components/shared/components/menubar/menubar';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  providers: [CookieService]
})
export class AppModule{}
@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, Header, Footer, Layout, Menubar, RouterLink, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

   protected title = 'training_project';

  stname:string= 'Haryana';
 
  constructor(){

  }
  ngOnInit(): void {
    (localStorage.setItem('name', this.stname))}
  }
    