import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './features/components/home/home';
import { Header } from './layouts/components/header/header';
import { Footer } from './layouts/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
}
