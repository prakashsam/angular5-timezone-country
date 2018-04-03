import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  jun = moment();// creating obj.
  countryList;
  zoneTime;
  currentZoneTime;
  objectKeys = Object.keys;
  zoneTimeCountryObj = []
  constructor() {
    this.jun.tz('America/Los_Angeles').format('hh : mm : ss a z');
    console.log(this.jun.tz('America/Los_Angeles').format('hh : mm : ss a z'));
    this.countryList = moment.tz.names();
    console.log(moment.tz.names()); // for all time zone.
  }
  ngOnInit() {
    this.getZoneTime();
    this.mergeZoneTime(this.countryList, this.zoneTime)

  }
  getZoneTime() {
    this.zoneTime = this.countryList.map(country => {
      return this.jun.tz(country).format('hh : mm : ss a z');

    });
    console.log(this.zoneTime)
  }

  mergeZoneTime(countryList, zoneTime) {
    for (var i = 0; i < countryList.length; i++) {
      var output = {};
      output["country"] = countryList[i]
      output["time"] = zoneTime[i]
      this.zoneTimeCountryObj.push(output)
    }
    console.log(this.zoneTimeCountryObj)
  }


}
// https://stackoverflow.com/questions/38674835/how-to-include-moment-timezone-in-angular-2-app
