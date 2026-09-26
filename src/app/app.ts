import { Component, signal } from '@angular/core';
import {Navigation} from '../components/navigation/navigation';
import {Switcher} from '../components/switcher/switcher';

@Component({
  imports: [Navigation, Navigation, Switcher],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EnergyAnalyzer-Web');
}
