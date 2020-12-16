import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MercantilAndinaService } from 'src/app/services/mercantil-andina.service';
import { UtilsFunctionsService } from 'src/app/utils/utils-functions.service';

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
  brand_selected;

  @Output() vehicle_info = new EventEmitter();

  constructor(private fb: FormBuilder,
              public mercantilAndinaService: MercantilAndinaService,
              public utilsFunctionsService: UtilsFunctionsService) { }

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
      this.brands = this.utilsFunctionsService.sort(res,'desc');
    })
  }

  async getModels(code:Number,year:Number) {
    this.brand_selected = this.brands.find(element => element.codigo == code);
    await this.mercantilAndinaService.getModels(code,year).then((res:any) => {
      this.models = this.utilsFunctionsService.sort(res);
    })
  }

  async getVersions(code:Number,year:Number,model:String) {
    this.vehicleForm.controls['version'].enable();
    await this.mercantilAndinaService.getVersions(code,year,model).then((res:any) => {
      this.versions = this.utilsFunctionsService.sort(res);
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

  //Esta funcion genera a partir del año actual un array de 20 años hacia atras.
  generateYears() {
    let d = new Date();
    let n = d.getFullYear();
    for (var i = 0; i < 20; i++) {
      this.years.push(n);
      n --;
    }
  }

  enableModelSelector() {
    this.vehicleForm.controls['model'].enable();
    this.getModels(this.vehicleForm.value.brand,this.vehicleForm.value.year);
  }

  setVersionName() {
    let brand_selected = this.versions.find(element => element.codigo == this.vehicleForm.value.version);
    this.vehicleForm.value.brand_name = brand_selected.desc;
  }

  sendInfo() {
    this.vehicle_info.emit(this.vehicleForm.value);
  }
  
}
