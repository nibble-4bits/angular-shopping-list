import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(private itemSvc: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemSvc.getItems();
  }

  onClick(idx: number) {
    this.itemSvc.removeItem(idx);
  }

}
