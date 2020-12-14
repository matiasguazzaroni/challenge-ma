import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MercantilAndinaMockService } from 'src/app/services/mercantil-andina-mock.service';
import { NumberFormatPipe } from 'src/app/utils/number-format.pipe';
import { UtilsFunctionsService } from 'src/app/utils/utils-functions.service';

@Component({
  selector: 'ensureaces-selector',
  templateUrl: './ensureaces-selector.component.html',
  styleUrls: ['./ensureaces-selector.component.css'],
  providers: [NumberFormatPipe]
})
export class EnsureacesSelectorComponent implements OnInit {

  ensureaces;

  @Output() ensureace_selected = new EventEmitter();

  constructor(public mercantilAndinaMockService: MercantilAndinaMockService,
              public utilsFunctionsService: UtilsFunctionsService) { }

  ngOnInit(): void {
    this.getEnsureaces();
  }

  async getEnsureaces() {
    await this.mercantilAndinaMockService.getEnsureaces().then((res:any) => {
      this.ensureaces = this.utilsFunctionsService.sort(res,'puntaje','desc');
      console.log(this.ensureaces);
    })
  }

  selectEnsureace(ensureace) {
    this.ensureace_selected.emit(ensureace);
  }

}
