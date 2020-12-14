import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeorefService } from 'src/app/services/georef.service';
import { MercantilAndinaMockService } from 'src/app/services/mercantil-andina-mock.service';
import { UtilsFunctionsService } from 'src/app/utils/utils-functions.service';

@Component({
  selector: 'personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent implements OnInit {

  personalDataForm:FormGroup;
  provinces;
  cities;
  userExist:boolean;

  @Output() personal_info = new EventEmitter();

  constructor(private fb: FormBuilder,
              public georefService: GeorefService,
              public mercantilAndinaMockService: MercantilAndinaMockService,
              public utilsFunctionsService: UtilsFunctionsService) { }

  ngOnInit(): void {
    this.getProvinces();
    this.newForm();
  }

  newForm(){
    this.personalDataForm = this.fb.group({
      dni:['', Validators.required],
      surname:['', Validators.required],
      name:['', Validators.required],
      email:[''],
      mobile:[''],
      phone:[''],
      province:['', Validators.required],
      city:[{value:'', disabled: true}, Validators.required],
      home_address:[{value:'', disabled: true}, Validators.required],
      birthday:[''],
      user:['', Validators.required],
      password:['', Validators.required],
    });
  }

  async getProvinces() {
    await this.georefService.getProvinces().then((res:any) => {
      if (res) {
        this.provinces = this.utilsFunctionsService.sort(res.provincias,'nombre');
      }
    })
  }

  async getCities(id:number) {
    this.personalDataForm.controls['city'].enable();
    await this.georefService.getCities(id).then((res:any) => {
      if (res) {
        this.cities = this.utilsFunctionsService.sort(res.municipios,'nombre');
      }
    })
  }

  enableHomeAdressInput() {
    this.personalDataForm.controls['home_address'].enable();
  }

  async checkUserDisponibility() {
    if (this.personalDataForm.controls.user.valid) {
      await this.mercantilAndinaMockService.checkUserDisponibility(this.personalDataForm.value.user).then((res:any) => {
        this.userExist = res;
      })
    }
  }

  sendInfo() {
    this.personal_info.emit(this.personalDataForm.value);
  }
}
