import { Component } from '@angular/core';
import { IdentityService } from './_services/Identity/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feeder';

  constructor(private identity: IdentityService){
   // this.identity.login("m.moghni99@gmail.com", "westworld")
    //.subscribe();
  }
}
