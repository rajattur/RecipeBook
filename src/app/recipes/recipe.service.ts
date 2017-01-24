import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
    public recipe: Recipe[] = [
    new Recipe('blah1', 'amazing1','https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150',
    [new Ingredient('fries',5)]),
    new Recipe('blah2', 'amazing2','https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250',
    [new Ingredient('tomatoes',4)
    ])
    ];

    getRecipe() {
        return this.recipe;
    }
    getOneRecipe(id: number) {
        return this.recipe[id];
    }
    deleteRecipe(recipe: Recipe) {
        this.recipe.splice(this.recipe.indexOf(recipe),1)
    }
    editRecipe() {

    }

  constructor() { }

}
