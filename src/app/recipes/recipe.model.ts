import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrediens: Ingredient[]

  constructor(name: string, desc: string, imagePath: string, ingrediens: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingrediens = ingrediens;

  }
}
