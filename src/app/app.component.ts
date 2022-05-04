import { Component } from '@angular/core';
import demodata from './../../src/assets/demo.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deploymenttesting';
 
  Players: any = demodata;
}
