import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements AfterViewInit {

  @ViewChild('carouselExampleCaptions') carouselElement: ElementRef | undefined;

  constructor() {
    console.log('DashboardComponent constructor called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');

    let targetCarouselElement = this.carouselElement?.nativeElement;

    if (!targetCarouselElement) {
      console.warn('ViewChild failed to find carouselElement. Attempting document.getElementById fallback.');
      targetCarouselElement = document.getElementById('carouselExampleCaptions');
    }

    console.log('1. targetCarouselElement (from ViewChild or getElementById):', targetCarouselElement);
    console.log('2. typeof bootstrap:', typeof bootstrap);
    console.log('3. bootstrap.Carousel:', (typeof bootstrap !== 'undefined' ? bootstrap.Carousel : 'bootstrap is undefined'));

    if (targetCarouselElement && typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
      console.log('All conditions met: Initializing Bootstrap Carousel.');
      try {
        const carousel = new bootstrap.Carousel(targetCarouselElement, {
          interval: 2500,
          ride: 'carousel',
          pause: 'hover'
        });
        console.log('Bootstrap Carousel initialized successfully!', carousel);

        targetCarouselElement.addEventListener('slid.bs.carousel', () => {
          console.log('Carousel slide changed!');
        });
      } catch (error) {
        console.error('Error initializing Bootstrap Carousel:', error);
      }
    } else {
      console.warn('Carousel initialization skipped. Reasons:');
      if (!targetCarouselElement) {
        console.warn('- targetCarouselElement is null/undefined. The HTML element with ID #carouselExampleCaptions was not found in the DOM.');
      }
      if (typeof bootstrap === 'undefined') {
        console.warn('- global "bootstrap" object is undefined. Bootstrap JavaScript is likely not loaded. Check index.html.');
      }
      if (typeof bootstrap !== 'undefined' && !bootstrap.Carousel) {
        console.warn('- bootstrap.Carousel is undefined. Bootstrap JS might be partially loaded or a different version. Check index.html.');
      }
    }
  }
}
