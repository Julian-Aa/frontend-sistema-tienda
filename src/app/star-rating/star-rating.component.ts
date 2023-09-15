import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating">
      <span *ngFor="let _ of getStarsArray(); let i = index" (click)="rate(i + 1)" [class.filled]="i < currentRating">&#9733;</span>
    </div>
  `,
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  currentRating: number = 0;

  getStarsArray(): any[] {
    return Array(5).fill(0);
  }

  rate(rating: number): void {
    if (!this.readonly) {
      this.currentRating = rating;
    }
  }
}
