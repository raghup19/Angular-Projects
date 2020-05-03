import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeEvaluation';
  name='Hello';
  successfull='text-success';
  public bol=true;
  public bolf=true;

  

  public messages={
    "text-success":this.bol,
    "text-failure":this.bolf
  }
}
