import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  token: string = environment.mapbox.accessToken;
  constructor() { 
    
  }
  getMap(){

    return new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 13,
      center: [ -122.41, 37.75],
      accessToken : this.token,
  });
  }
}
