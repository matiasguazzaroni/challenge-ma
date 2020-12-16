import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-ma';
  fullData = [];
  showSuccessMsg:Boolean;

  constructor(private cdr:ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  recievePersonalInfo(data) {
    this.fullData[0]?.personal_info ? this.fullData[0].personal_info == data : this.fullData.push({personal_info:data});
  }

  recieveVehicleInfo(data) {
    this.fullData[0]?.vehicle_info ? this.fullData[0].vehicle_info == data : this.fullData.push({vehicle_info:data});
  }

  recieveEnsureaceInfo(data) {
    this.fullData[0]?.ensureace_info ? this.fullData[0].ensureace_info == data : this.fullData.push({ensureace_info:data});
  }

  setSuccessMsg(flag) {
    this.showSuccessMsg = flag;
  }
}

