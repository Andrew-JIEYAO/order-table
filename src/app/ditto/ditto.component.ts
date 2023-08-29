import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DiagListComponent } from './diag-list/diag-list.component';
import { VisitListComponent } from './visit-list/visit-list.component';
import { NoteListComponent } from './note-list/note-list.component';
import { DrugListComponent } from './drug-list/drug-list.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { Coding } from '@his-viewmodel/double-list';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-ditto',
  standalone: true,
  imports: [
    CommonModule,
    DiagListComponent,
    VisitListComponent,
    NoteListComponent,
    DrugListComponent,
    ExamListComponent,
    DropdownModule,
    ButtonModule,
    DialogModule,
    CardModule,
    CheckboxModule,
    FormsModule,
    ScrollPanelModule
  ],
  templateUrl: './ditto.component.html',
  styleUrls: ['./ditto.component.scss'],
})
export class DittoComponent implements OnInit {
  institutions: Coding[] = [];
  diagList: Array<any> = [];
  drugList: Array<any> = [];
  examList: Array<any> = [];
  visiable!: boolean;
  title = 'Ditto選擇';
  checked!: boolean;

  ngOnInit(): void {
    this.checked = false;
    this.institutions = [
      {
        code: '01',
        display: '中國醫藥大學附設醫院',
      },
      {
        code: '02',
        display: '台中醫院',
      },
    ];

    this.diagList = [
      {
        status: 'Completed',
        category: 'Text',
        diagCode: '01',
        diagName: '醫療科',
        chronic: '慢性',
        ro: false,
      },
      {
        status: 'Completed',
        category: 'Text',
        diagCode: '01',
        diagName: '醫療科',
        chronic: '慢性',
        ro: true,
      },
      {
        status: 'Completed',
        category: 'Text',
        diagCode: '01',
        diagName: '醫療科',
        chronic: '慢性',
        ro: false,
      },
    ];

    this.drugList = [
      {
        id: 1,
        resistance: '抗2',
        drugName: 'Teicoplanin...',
        dose: '1.5',
        unit: 'Amp',
        doseUse: '300mg',
        way: 'IDV',
        frequency: 'QD',
        grinding: true,
        enjoin: '',
        day: 0,
        total: 0,
        unit2: 'Amp',
        ownExpensey: false,
        price: 120,
        orderId: '82-00010',
      },
      {
        id: 2,
        resistance: '抗2',
        drugName: 'Metoclopra...',
        dose: '1.5',
        unit: 'Amp',
        doseUse: '1000mg',
        way: 'ADS',
        frequency: 'QD',
        grinding: false,
        enjoin: '',
        day: 0,
        total: 0,
        unit2: 'Amp',
        ownExpensey: true,
        price: 120,
        orderId: '82-00010',
      },
      {
        id: 3,
        resistance: '抗2',
        drugName: 'Teicoplanin...',
        dose: '30',
        unit: 'Amp',
        doseUse: '500mg',
        way: 'ADS',
        frequency: 'HS',
        grinding: false,
        enjoin: '',
        day: 0,
        total: 0,
        unit2: 'Amp',
        ownExpensey: true,
        price: 120,
        orderId: '82-00010',
      },
      {
        id: 4,
        resistance: '抗2',
        drugName: 'Teicoplanin...',
        dose: '3.5',
        unit: 'Amp',
        doseUse: '300mg',
        way: 'IDV',
        frequency: 'Q12H',
        grinding: true,
        enjoin: '',
        day: 3,
        total: 0,
        unit2: 'Amp',
        ownExpensey: false,
        price: 120,
        orderId: '82-00010',
      },
    ];

    this.examList = [
      {
        name: 'Chest PA',
        times: '1',
        fequency: '',
        summary: '不穩定心絞痛',
        order: '',
        ownExpensey: false,
        price: 120,
        checkCode: '82-00010',
      },
      {
        name: 'Check Cital sign',
        times: '1',
        fequency: '',
        summary: '',
        order: '',
        ownExpensey: true,
        price: 213,
        checkCode: '82-00010',
      },
      {
        name: 'No limit of postition',
        times: '1',
        fequency: 'CONT',
        summary: '',
        order: '',
        ownExpensey: false,
        price: 21,
        checkCode: '82-00010',
      },
    ];
  }

  showDiaglog() {
    this.visiable = true;
  }
}
