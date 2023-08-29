import { Injectable } from '@angular/core';
import { State } from './prescriptions.interface';



@Injectable({
  providedIn: 'root',
})
export class TestTableService {
  constructor() {}
  // 頻率
  // #getTableDatas(){
  //   return [
  //     {
  //       fid:'BID',
  //       fname:'一日兩次'
  //     },
  //     {
  //       fid:'BID&HS',
  //       fname:'早晚飯後及睡前'
  //     },
  //     {
  //       fid:'BIW',
  //       fname:'每週兩次'
  //     },
  //     {
  //       fid:'CM',
  //       fname:'翌日'
  //     },
  //     {
  //       fid:'CN&HS',
  //       fname:'翌日及睡前'
  //     },
  //     {
  //       fid:'HS',
  //       fname:'睡前'
  //     },
  //   ]
  // }

  #getPrescriptions() {
    return [
      {
        state:State.Add,
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
        ownExpensey:false,
        price:120,
        orderId:'82-00010',
      },
      {
        state:State.Revise,
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
        ownExpensey:false,
        price:120,
        orderId:'82-00010',
      },
      {
        state:State.Remove,
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
        ownExpensey:false,
        price:120,
        orderId:'82-00010',
      },
      {
        state:State.Origin,
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
        ownExpensey:false,
        price:120,
        orderId:'82-00010',
      },
    ];
  }

  getPrescription() {
    return Promise.resolve(this.#getPrescriptions());
  }
}
