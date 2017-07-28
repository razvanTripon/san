import { ShopingService } from './../shopping-list/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('sdfdsfsdf', 6)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('aaaaaaaaaaa', 8),
        new Ingredient('bbbbbbbbbbbbb', 9),
      ]
    )
  ];
  constructor(private shopingService: ShopingService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsTOshopingList(ingredients: Ingredient[]) {
    this.shopingService.addIngredients(ingredients);
  }
}
