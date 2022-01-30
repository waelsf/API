import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  li:any;
  lis=[];
  constructor(private http : HttpClient){}

  ngOnInit(): void {
    this.http.get('https://www.metaweather.com/api/location/search/?query=san')
    .subscribe(Response => {

      // If response comes hideloader() function is called
      // to hide that loader
      if(Response){
        hideloader();
      }
      console.log(Response)
      this.li=Response;
      this.lis=this.li.consolidated_weather;
    });
    function hideloader(){
      // document.getElementById('loading').style.display = 'none';

    }
  }}
