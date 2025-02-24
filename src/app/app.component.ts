import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarComponent } from "./star/star.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ StarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAng';
}
