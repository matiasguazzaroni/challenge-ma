import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeorefService } from 'src/app/services/georef.service';
import { MercantilAndinaMockService } from 'src/app/services/mercantil-andina-mock.service';


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

  constructor(private fb: FormBuilder,
              public georefService: GeorefService,
              public mercantilAndinaMockService: MercantilAndinaMockService) { }

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

  imprimir(){
    console.log(this.personalDataForm);
  }

  async getProvinces() {
    await this.georefService.getProvinces().then((res:any) => {
      console.log(res);
      this.provinces = res.provincias.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
      // this.getCities(this.provinces[0].id);
      console.log(this.personalDataForm);
    })
  }

  async getCities(id:number) {
    this.personalDataForm.controls['city'].enable();
    await this.georefService.getCities(id).then((res:any) => {
      console.log(res);
      this.cities = res.municipios.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));;
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
}
