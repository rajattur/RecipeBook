import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'bk-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: []
})
export class RecipesComponent implements OnInit {
  selectedRecipeOut: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
