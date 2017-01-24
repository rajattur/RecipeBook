import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from "../recipe.service";
@Component({
  selector: 'bk-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: []
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];


  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipe();
  }

  onSelected(recipe: Recipe) {

  }

}
