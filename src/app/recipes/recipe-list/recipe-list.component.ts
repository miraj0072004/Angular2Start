//import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[]=[];


//  @Output() recipeSelected= new EventEmitter<Recipe>();
// recipe=new Recipe("Dummy","Dummy","http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg");

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {

  	this.recipes=this.recipeService.getRecipes();
  	this.recipeService.recipesChanged.subscribe(
  		(recipes: Recipe[])=>this.recipes=recipes
  		)
  }
 // onSelected(recipe:Recipe)
 // {
 // 	this.recipeSelected.emit(recipe);
 // }
} 
