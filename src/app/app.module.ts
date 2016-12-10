import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";

// import { HeaderComponent } from "./header.component";
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from "./header/dropdown.directive";

import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeService } from "./recipes/recipe.service";

import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DropdownDirective,
        ShoppingListAddComponent,
        ShoppingListComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        // HeaderComponent,
    ],
    imports: [BrowserModule, routing],
    providers: [ShoppingListService, RecipeService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
