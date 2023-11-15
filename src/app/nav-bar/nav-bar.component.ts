import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    constructor(private el: ElementRef) {}
  

    
      scrollToPlacesToVisit() {
        if (this.el.nativeElement.ownerDocument.getElementById('placesToVisit')) {
          this.el.nativeElement.ownerDocument.getElementById('placesToVisit').scrollIntoView({ behavior: 'smooth' });
        }
      }
    
      scrollToRecommendedPlaces() {
        if (this.el.nativeElement.ownerDocument.getElementById('recommendedPlaces')) {
          this.el.nativeElement.ownerDocument.getElementById('recommendedPlaces').scrollIntoView({ behavior: 'smooth' });
        }
      }
    }