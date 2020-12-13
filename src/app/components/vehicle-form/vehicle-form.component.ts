import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercantilAndinaService } from 'src/app/services/mercantil-andina.service';

@Component({
  selector: 'vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  vehicleForm:FormGroup;
  brands;
  models;
  versions;
  years:Array<number> = [];

  constructor(private fb: FormBuilder,
              public mercantilAndinaService: MercantilAndinaService) { }

  ngOnInit(): void {
    this.getBrands();
    this.newForm();
  }

  newForm(){
    this.vehicleForm = this.fb.group({
      brand:['', Validators.required],
      year:[{value:'', disabled: true}, Validators.required],
      model:[{value:'', disabled: true}, Validators.required],
      version:[{value:'', disabled: true}]
    });
  }

  async getBrands() {
    await this.mercantilAndinaService.getBrands().then((res:any) => {
      this.brands = res.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
    })
  }

  async getModels(code:Number,year:Number) {
    await this.mercantilAndinaService.getModels(code,year).then((res:any) => {
      this.models = res.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
    })
  }

  async getVersions(code:Number,year:Number,model:String) {
    this.vehicleForm.controls['version'].enable();
    await this.mercantilAndinaService.getVersions(code,year,model).then((res:any) => {
      this.versions = res.sort((a,b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0));
    })
  }

  enableYearSelector() {
    if (this.vehicleForm.value.year) {
      this.getModels(this.vehicleForm.value.brand,this.vehicleForm.value.year);
    } else {
      this.generateYears();
      this.vehicleForm.controls['year'].enable();
    }
  }

  generateYears() {
    let d = new Date();
    let n = d.getFullYear();
    for (var i = 0; i < 20; i++) {
      this.years.push(n);
      n --;
    }
    console.log(this.years);
  }

  enableModelSelector() {
    this.vehicleForm.controls['model'].enable();
    this.getModels(this.vehicleForm.value.brand,this.vehicleForm.value.year);
  }
}
