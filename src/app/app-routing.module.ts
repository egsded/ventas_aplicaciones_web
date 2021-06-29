import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'people',
		component:PeopleComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
