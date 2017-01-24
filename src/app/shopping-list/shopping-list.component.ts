import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppinglistService} from "./shoppinglist.service";

@Component({
  selector: 'bk-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: []
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  constructor(private sls: ShoppinglistService) { }

  ngOnInit() {
      this.items = this.sls.getIngretient();
  }

}
