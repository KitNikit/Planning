import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  modal: boolean = true;
  @Output() modalState = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalState.emit(this.modal);
  }
}
