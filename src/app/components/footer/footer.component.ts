import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapboxService } from 'src/app/services/mapbox.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //dependency injection
  private map:any;
  constructor(private mapboxService:MapboxService) { 
    
  }

  ngOnInit(): void {

    // Add map controls
  }

  ngAfterViewInit(): void {
    this.map = this.mapboxService.getMap();
    this.map.addControl(new mapboxgl.NavigationControl());
  }


}
