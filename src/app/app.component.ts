import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, HelloWorldComponent, RouterLink, CommonModule],
  template: `
    <h1>Hello World Main!</h1>
    <!--<p>This template definition spans multiple lines.</p>
    <app-user-profile></app-user-profile>
    <app-hello-world></app-hello-world>-->
    <nav>
      <a routerLink="hello-world">hello world</a>
    </nav>
    <nav>
      <a routerLink="user-profile">user profile</a>
    </nav>
    <nav><p (click)="viewUserProfile()">enrutamiento con click</p></nav>

<table>
    <caption>Personas</caption>
    <tbody>
    <tr>
      <th>id</th>
      <th>Nombre</th>
      <th>Opciones</th>

    </tr>


    <tbody>
    <tr *ngFor="let user of persons">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>
        <a [routerLink]="['/user-profile', user.id]">routerLink</a>
        <button (click)="viewUserProfileById(user.id)"> click funcion </button>
        <button (click)="viewUserProfileParams(user.id)"> click funcion params id </button>
        <button (click)="viewUserProfileParamsObject(user)"> click funcion params object </button>
      </td>

    </tr>

    </tbody>
    </table>

    <router-outlet></router-outlet>
  `,
  styles: ['h1 { font-weight: normal; }'],
})
export class AppComponent {
  title = 'angular-routing';
  constructor(private router: Router) { }
  public persons:any[]=[
    {id:1,name:"noe"},
    {id:2,name:"wilber"},
    {id:3,name:"tipo"},
    {id:4,name:"mamani"}];
  public viewUserProfile():void {
    this.router.navigate(['user-profile']);
  }
  public viewUserProfileById(id:number):void {
    if (id %2==0) {
      console.log(id);
      this.router.navigate(['user-profile',id]);
    }else {
      console.log("======: ",id);
      this.router.navigate(['hello-world',id]);

    }
    //this.router.navigate(['/user-profile',id]);
  }

  public viewUserProfileParams(id: number):void {
    console.log(id);
    this.router.navigate(['user-profile'], {queryParams:{id:id}});
  }

  viewUserProfileParamsObject(user: any) {
    if (user.id %2==0) {
      this.router.navigate(['user-profile'], {queryParams:{id:user.id, name:user.name}});
    }else {
      this.router.navigate(['hello-world'], {queryParams:{id:user.id, name:user.name}});
    }

  }
}
