import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{WeatherProvider} from '../../providers/weather/weather';
import { CompileStylesheetMetadata } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:string,
    country:string
  }

  constructor(public navCtrl: NavController,private weatherProvider: WeatherProvider) {

  }


  ionViewWillEnter(){
    this.location={
      city:'Chicago',
      country: 'US'
    }
    this.weatherProvider.getWeather(this.location.city,this.location.country)
      .subscribe(weather=> {
        console.log(weather);
        this.weather=weather.city;
      });
  }

}
