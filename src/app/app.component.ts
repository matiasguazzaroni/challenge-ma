import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-ma';
  personal_info;
  vehicle_info;
  ensureace_info;

  recievePersonalInfo(data) {
    this.personal_info = data;
  }

  recieveVehicleInfo(data) {
    this.vehicle_info = data;
  }

  recieveEnsureaceInfo(data) {
    this.ensureace_info = data;
  }
}

