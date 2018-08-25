import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{WeatherProvider} from '../../providers/weather/weather';
import { CompileStylesheetMetadata } from '../../../node_modules/@angular/compiler';
import{Storage} from '@ionic/storage';
import{Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {
  weather:any;
  location:{
    city:string,
    country:string
  }

  constructor(public navCtrl: NavController,public weatherProvider: WeatherProvider,private storage:Storage) {

  }
/*   this.geolocation.getCurrentPosition().then((resp) => {
    // let lat =resp.coords.latitude
    // let lng =resp.coords.longitude
    
   }).catch((error) => {
     console.log('Error getting location', error);
   });
 */

    
  ionViewWillEnter(){
    this.storage.get('location').then((val)=>{
      if (val !=null){
        this.location=JSON.parse(val);
      }else{
        this.location={
          city:'Chicago',
          country:'US'
        }
      }
      this.weatherProvider.getWeather(this.location.city,this.location.country)
      .subscribe(weather=> {
        console.log(weather);
        this.weather=weather;
      });
    });

    }
    
}
