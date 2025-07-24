import { Component, OnInit } from '@angular/core';
import { Service1 } from '../../Service/fci-services'; // Import Service1
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor and ngIf
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-additional',
  standalone: true, // Mark as standalone
  imports: [CommonModule, HttpClientModule], // Add CommonModule and HttpClientModule to imports
  templateUrl: './additional.html',
  styleUrl: './additional.css'
})
export class Additional implements OnInit {

  postsData: any[] = []; // Property to store the fetched data

  // Inject Service1 into the constructor
  constructor(private _service1: Service1) { }

  ngOnInit(): void {
    // Call the getdata method from Service1
    this._service1.getdata().subscribe({
      next: (res: any[]) => {
        this.postsData = res; // Assign the fetched data to postsData
        console.log('Data from JSONPlaceholder:', this.postsData);
      },
      error: (err) => {
        console.error('Error fetching data from JSONPlaceholder:', err);
      }
    });
  }
}