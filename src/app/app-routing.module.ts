import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { HomelogedComponent } from './components/homeloged/homeloged.component';
import { GithubComponent } from './components/github/github.component'

const routes: Routes = [
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'people',
		component:PeopleComponent
	},
	{
		path:'inicio',
		component:HomelogedComponent
	},
	{
		path:'github',
		component:GithubComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
