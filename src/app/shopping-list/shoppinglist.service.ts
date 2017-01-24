import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class ShoppinglistService {

    public ingretients: Ingredient[] = [];

    getIngretient() {
        return this.ingretients;
    }

    addIngretient(item: Ingredient[]) {
        Array.prototype.push.apply(this.ingretients, item);
    }

    constructor() { }

}
