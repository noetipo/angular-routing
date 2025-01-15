import { Routes } from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

export const routes: Routes = [
  {path: '',redirectTo: 'hello-world', pathMatch: 'full'},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'user-profile/:id', component: UserProfileComponent},
  {path: 'hello-world/:id', component: HelloWorldComponent},
];
