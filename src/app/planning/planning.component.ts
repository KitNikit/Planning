import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})
export class PlanningComponent implements OnInit {
  tab1: boolean = true;
  tab2: boolean = false;
  modal: boolean = false;
  programmMenu: string = 'Страхование с заботой о клиенте';
  trainerMenu: string = 'Сергей Ефремов';
  dateMenu: string = 'Дата';
  timeMenu: string = 'Время';
  secondTrainerMenu: string = 'Тренер';
  thirdDateMenu: string = 'Дата';
  thirdTimeMenu: string = 'Время';
  thirdTrainerMenu: string = 'Тренер';
  groupMenu: string = 'Администрирование';
  positionMenu: string = 'Менеджер по персон...';
  experienceMenu: string = '3 — 10 лет';

  @Output() modalState = new EventEmitter();

  setTab1() {
    this.tab1 = true;
    this.tab2 = false;
  }
  setTab2() {
    this.tab2 = true;
    this.tab1 = false;
  }

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.modalState.emit(this.modal);
  }
}
