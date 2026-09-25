import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Service()
export class Smard {


  private readonly http = inject(HttpClient);
  private readonly baseUrl;

  constructor() {
    this.baseUrl = 'https://www.smard.de/app/chart_data/';
  }

  getAllInitial() {
    const power: PowerSource = {
      Lignite: 1223,
      Nuclear: 1224,
      Wind: 1225,
      Water: 1226,
      Renewable: 1228,
      NaturalGas: 4071
    };

    for (const item of Object.values(power)) {
      this.http.get(this.baseUrl + item + `/DE/index_hour.json`)
        .subscribe(data => console.log(data));
    }
  }

  getAllSources(timestamp: string){
    const power: PowerSource = {
      Lignite: 1223,
      Nuclear: 1224,
      Wind: 1225,
      Water: 1226,
      Renewable: 1228,
      NaturalGas: 4071
    };

    for (const item of Object.values(power)) {
      this.http.get(this.baseUrl + item + `/DE/index_${timestamp}.json`);
    }
  }
}
