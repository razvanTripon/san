import { ShopingService } from './shopping.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shopingService: ShopingService) { }
  ngOnInit() {
    this.ingredients = this.shopingService.getIngredients();
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.shopingService.addIngredint(ingredient);
  }
}
