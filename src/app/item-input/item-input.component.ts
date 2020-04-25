import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private itemSvc: ItemService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      itemName: ''
    });
  }

  onSubmit() {
    const item: Item = {
      name: this.itemForm.get('itemName').value,
      bought: false
    };
    this.itemSvc.addItem(item);
    this.itemForm.reset();
  }

}
