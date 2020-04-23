import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { NgModel } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {
  itemName: string;

  constructor(private itemSvc: ItemService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.itemSvc.addItem({
      name: this.itemName,
      bought: false
    });
    this.itemName = '';
  }

}
