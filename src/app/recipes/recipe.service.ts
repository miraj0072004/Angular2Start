import { Injectable,EventEmitter } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared';
import { Http , Headers, Response} from '@angular/http';

@Injectable()
export class RecipeService {

  recipesChanged= new EventEmitter<Recipe[]>();

	private recipes : Recipe []=
	[new Recipe('Schnitzel','Very Tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
				[new Ingredient('French Fries',2),
				 new Ingredient('Pork Meat',1)]),
	 new Recipe('Summer Salad','Okayish','http://www.taste.com.au/images/recipes/col/2014/02/fresh-summer-vegetable-salad-27921_l.jpeg',[])];

  constructor(private http: Http) { }

  public getRecipes()
  {
  	return this.recipes;
  }

  public getRecipe(id : number)
  {
  	return this.recipes[id];
  }

  public deleteRecipe(recipe : Recipe)
  {
  	this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  public addRecipe(newRecipe: Recipe)
  {
    this.recipes.push(newRecipe);
  }

  public editRecipe(oldRecipe: Recipe,newRecipe: Recipe)
  {
    this.recipes[this.recipes.indexOf(oldRecipe)]=newRecipe;
  }

  storeData()
  {
    const body=JSON.stringify(this.recipes);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put("https://recipebook-43d0e.firebaseio.com/recipe.json",body,
                 {headers:headers});
  }

  fetchData()
  {
    return this.http.get("https://recipebook-43d0e.firebaseio.com/recipe.json")
                    .map((response:Response)=>response.json())
                    .subscribe(
                      (data: Recipe[])=>
                      {
                        this.recipes=data;
                        this.recipesChanged.emit(this.recipes);
                      }
                      )
  }

}
