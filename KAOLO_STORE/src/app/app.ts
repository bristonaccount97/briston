import { Component, signal } from '@angular/core';
import { AppRoutingModule } from "./app.routes";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('KAOLO_STORE');
}
