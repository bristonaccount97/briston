import { Component, signal } from '@angular/core';
import { AppRoutingModule } from "./app.routes";
@Component({
  selector: 'app-root',
  imports: [AppRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('KAOLO_STORE');
}
