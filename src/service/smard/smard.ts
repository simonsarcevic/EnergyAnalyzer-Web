import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Service()
export class Smard {


  private readonly http = inject(HttpClient);
  private readonly baseUrl;

  constructor() {
    this.baseUrl = 'https://www.smard.de/app/chart_data/';
  }


  getAllSources(){
    const power: PowerSource = {
      Lignite: 1223,
      Nuclear: 1224,
      Wind: 1225,
      Water: 1226,
      Renewable: 1228,
      NaturalGas: 4071
    };

    for (const item in Object.values(power)) {
      this.http.get(this.baseUrl + item + '/DE/index_hour.json');
    }
  }

  selectEnergySource(source: number): Observable<any> {
    return this.http.get(this.baseUrl + source + '/DE/index_hour.json');
  }
}
