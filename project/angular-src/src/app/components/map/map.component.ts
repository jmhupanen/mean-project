import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'Google Maps Integrated';
  lat: number = 61.065021;
  lng: number = 28.094492;

}
