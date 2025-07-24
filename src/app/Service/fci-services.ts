import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FCIServices {

  // private apiurl:any='https://cfpp.nic.in/cfppportalws/public/getdailyprocurementreport/2/2025-2026/1/2';
  private apiurl:any='https://cfpp.nic.in/cfppportalws/public/';
  

 
   constructor(private _http:HttpClient) { }

   statename:any='delhi';
   
  private data:any=[
    {id:1, name:'a', address:'Delhi', contact:'1234567890'},
    {id:2, name:'b', address:'Noida', contact:'5678123490'},
    {id:3, name:'c', address:'Gurgaon', contact:'1567892340'},
    {id:4, name:'d', address:'Lucknow', contact:'1234567890'},
    {id:5, name:'e', address:'MP', contact:'1567890234'},
    {id:6, name:'f', address:'Varanasi', contact:'1238904567'},
    {id:7, name:'g', address:'Jarkhand', contact:'7812345690'},
    {id:8, name:'h', address:'HP', contact:'7815623490'},
    {id:9, name:'i', address:'Kashmir', contact:'8912345670'},
    {id:10, name:'j', address:'Haryana', contact:'7892341560'}
  ]
  loader: any;

  servicedata(){
    return this.data;
  }

  getdata(url:any): Observable<any>{
    return this._http.get(this.apiurl+url);
  }

  postdata(url:any, model:any): Observable<any> { 
    return this._http.post(this.apiurl+url, model);
  }

}

@Injectable({
  providedIn: 'root' 
})
export class Service1 {
  private urlapi: any = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) { }

  getdata(): Observable<any> { 
    return this._http.get(this.urlapi);
  }

  

}