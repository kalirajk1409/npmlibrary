import { Component } from '@angular/core';
import { ProlibService } from 'prolib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prouitest';
  constructor(private proSer: ProlibService){
    console.log(this.proSer.title);
    this.title = this.proSer.title;
  }
}
