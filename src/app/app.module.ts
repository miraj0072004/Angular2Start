import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import {AppComponent} from './app.component';
import {RecipesComponent} from './recipes';
import {RecipeListComponent} from './recipes/recipe-list';
import {RecipeItemComponent} from './recipes/recipe-list';
import {RecipeDetailComponent} from './recipes/recipe-detail';
import {ShoppingListComponent} from './shopping-list';
import {ShoppingListAddComponent} from './shopping-list';
import {DropdownDirective} from './dropdown.directive';
import {RecipeService} from './recipes';
import {ShoppingListService} from './shopping-list';
import {routing} from './app.routes';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations : [
                  AppComponent,
        				  HeaderComponent,
        				  RecipesComponent,
        				  RecipeListComponent,
        				  RecipeItemComponent,
        				  RecipeDetailComponent,
        				  ShoppingListComponent,
        				  ShoppingListAddComponent,
                  DropdownDirective
                 ],
  imports : [BrowserModule,routing,FormsModule,ReactiveFormsModule,HttpModule],
  bootstrap : [AppComponent],
  providers: [RecipeService,ShoppingListService]

})
export class AppModule{}
