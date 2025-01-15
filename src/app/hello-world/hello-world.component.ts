import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  standalone: true,
  template: `
    <h1>Hello World!</h1>
    <p>This template definition Hello World!.</p>
  `,
  styles: ['h1 { font-weight: normal; }'],
})
export class HelloWorldComponent {

}
