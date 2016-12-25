import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    
    <h1>Hello World{{name}}</h1>
    <my-home></my-home>
    <my-profile></my-profile>
  
`,
})
export class AppComponent  { name = 'Angular'; }
