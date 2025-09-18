import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navfbar } from "./navfbar/navfbar";
import { Footer } from "./footer/footer";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navfbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('freelnce');
  
}
