import { Component } from '@angular/core';
import { Tour } from '../interfaces/tours';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  tours: Tour[] = [];
  newTourTitle: string = '';
  newTour: Tour={
    id: '',
    title: '',
    destination: ''
  };
 

  

  addTour() {
    if (this.newTour.title.trim() !== '' && this.newTour.destination.trim() !== '') {
      this.newTour.id = (this.tours.length + 1).toString(); 
      this.tours.push({ ...this.newTour });
      this.newTour = { id: '', title: '', destination: '' }; 
    }
  }

  updateTour(tour: Tour) {
    
    console.log('Update Tour:', tour);
  }

  softDeleteTour(tour: Tour) {
    this.tours = this.tours.filter((t: Tour) => t.id !== tour.id);
  }
}

function addTour() {
  throw new Error('Function not implemented.');
}
function updateTour(tour: any, Tour: any) {
  throw new Error('Function not implemented.');
}

