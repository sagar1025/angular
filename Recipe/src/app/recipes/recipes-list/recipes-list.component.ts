import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
	//an Array of recipes of type Recipe
	recipes: Recipe[] = [
	new Recipe('Test Recipie','Test Description','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg');
	new Recipe('Taco','Grilled Pork Tacos','https://www.inspiredtaste.net/wp-content/uploads/2018/03/Easy-Ground-Pork-Tacos-Recipe-3-1200.jpg');
	new Recipe('Grilled Corn','Mexican street food - grilled corn', 'https://prods3.imgix.net/images/articles/2017_06/Non-Feature-grilled-mexican-street-corn-recipe-elotes.jpg?auto=format%2Ccompress&dpr=1.49&ixjsv=2.2.3&q=67&w=750');

	];
	  constructor() { }

	  ngOnInit() {
	  }

}
