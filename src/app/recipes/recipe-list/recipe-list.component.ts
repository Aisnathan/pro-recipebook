import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
  
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[]=[
new Recipe('dummy','dummydescription','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[]),new Recipe('dummy2','dummydescription2','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[])];
@Output() recipeSelected = new EventEmitter<Recipe>();



  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe:Recipe){
  this.recipeSelected.emit(recipe);
 
  }


}
