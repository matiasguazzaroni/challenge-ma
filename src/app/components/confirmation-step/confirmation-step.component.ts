import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.css']
})
export class ConfirmationStepComponent implements OnInit {

  @Input() dataToShow;
  @Output() show_success_msg = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  sendInfo() {
    this.show_success_msg.emit(true);
  }

}
