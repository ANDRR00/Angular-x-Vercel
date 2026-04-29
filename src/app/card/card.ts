import { Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
 cartCount = signal(0);

  addToCart() {
    this.cartCount.update(count => count + 1);
  }

  removeFromCart() {
    if (this.cartCount() > 0) {
      this.cartCount.update(count => count - 1);
    }
  }
}
