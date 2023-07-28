//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';



//@NgModule({
//  declarations: [],
//  imports: [
//    CommonModule
//  ]
//})
//export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoursComponent } from './hours/hours.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';
import { FetchHourComponent } from './fetch-hour/fetch-hour.component';

//import { ShoppingListComponent } from './shopping-list/shopping-list.component';
//import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
//import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
//import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
//import { RecipesResolverService } from './recipes/recipes-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hours',
    component: HoursComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },

  {
  path: 'fetch-hour',
  component: FetchHourComponent
  } 




 
 
  
  
  ];

//const appRoutes: Routes = [
//  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
//  {
//    path: 'recipes',
//    component: RecipesComponent,
//    children: [
//      { path: '', component: RecipeStartComponent },
//      { path: 'new', component: RecipeEditComponent },
//      {
//        path: ':id',
//        component: RecipeDetailComponent,
//        resolve: [RecipesResolverService]
//      },
//      {
//        path: ':id/edit',
//        component: RecipeEditComponent,
//        resolve: [RecipesResolverService]
//      }
//    ]
//  },
//  { path: 'shopping-list', component: ShoppingListComponent }
//];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
