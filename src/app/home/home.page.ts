import { Component } from '@angular/core';
import { RestaurantItem } from '../models/restaurant-item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recommendedItems: RestaurantItem[] = [];
  constructor() {}
}
