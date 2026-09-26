import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-switcher',
  styleUrl: './switcher.css',
  templateUrl: './switcher.html',
})
export class Switcher {

  active = 'heute';

  setActive(value: string){
    this.active = value;
  }
}
