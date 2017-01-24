import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe';
import {ShoppinglistService} from "../../shopping-list/shoppinglist.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
@Component({
  selector: 'bk-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: []
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    selectedRecipe: Recipe;
    private recipeIndex: number;
    private subcription: Subscription;

    constructor(private sls: ShoppinglistService, private routes: ActivatedRoute, private selected: RecipeService,
                private router: Router) { }

    ngOnInit() {
        this.subcription = this.routes.params.subscribe(
            (params: any) => {
                this.recipeIndex = params['id'];
                this.selectedRecipe = this.selected.getOneRecipe(this.recipeIndex);
            }
        )
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
    addToShoppingList() {
        this.sls.addIngretient(this.selectedRecipe.ingredients)
    }

    onEdit() {
        this.router.navigate(['/recipes',this.recipeIndex,'edit'])
    }

    onDelete() {
        this.selected.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes'])
    }

}
