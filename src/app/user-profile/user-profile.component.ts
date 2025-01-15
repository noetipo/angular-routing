import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [],
  standalone: true,
  template: `
    <h1>User profile!!</h1>
  <h3>user id: {{userId}} {{name}}</h3>
    <button (click)="goHelloWorld()">hello world</button>
  `,
  styles: ['h1 { font-weight: normal; }'],
})
export class UserProfileComponent implements OnInit {
  userId: string|null = null;
  name: string|null = null;
  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
    })
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.userId = params.get('id');
      this.name = params.get('name');
    })
  }

  goHelloWorld() {
    this.router.navigate(['/hello-world']);
  }
}
