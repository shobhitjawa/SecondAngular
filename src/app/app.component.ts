import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second2';
  constructor(private srv:TestService)
  {
    this.srv=srv;
    srv.printtoconsole("Got the service");
  }
}
