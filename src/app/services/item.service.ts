import { Injectable } from '@angular/core';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[];

  constructor() { this.items = []; }

  addItem(item: Item) {
    this.items.push(item);
  }

  removeItem(idx: number) {
    this.items.splice(idx, 1);
  }

  getItems() {
    return this.items;
  }
}
