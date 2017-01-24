import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'bk-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
  constructor() { }

  ngOnInit() {
  }


}
