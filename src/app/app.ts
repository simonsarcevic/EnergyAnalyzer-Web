import { Component, signal } from '@angular/core';
import {Navigation} from '../components/navigation/navigation';

@Component({
  imports: [Navigation, Navigation],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EnergyAnalyzer-Web');
}
