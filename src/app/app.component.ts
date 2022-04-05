import { Component } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eid-frontend';

  loading$ = this.spinner.loading$;
  constructor(public spinner: SpinnerService){
  
  }
}
