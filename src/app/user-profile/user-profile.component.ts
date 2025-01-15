import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [],
  standalone: true,
  template: `
    <h1>User profile!!</h1>
  <h3>user id: {{userId}}</h3>
  `,
  styles: ['h1 { font-weight: normal; }'],
})
export class UserProfileComponent implements OnInit {
  userId: string|null = null;
  constructor(private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
    })
  }

}
