import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShopingService {
    ingredientChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredint(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
    addIngredients(ingredients: Ingredient[]) {
        // for (const ingr of ingredients) {
        //     this.addIngredint(ingr);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());

    }
}
