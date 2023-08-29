import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TestTableService } from './test-table.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Prescriptions } from './prescriptions.interface';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-test-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    SplitButtonModule,
    CheckboxModule
  ],
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss'],
  providers: [TestTableService],
})
export class TestTableComponent implements OnInit {
  prescriptions: Prescriptions[] = [];
  testTableService = inject(TestTableService);
  deletedRows: number[] = [];
  rowBackground = ''
  // item:Array<string> = [];
  items: MenuItem[] | undefined;



  ngOnInit(): void {
    this.testTableService.getPrescription().then((result) => {
      this.prescriptions = result;
    });
  }

  addPrescroptions(){
    console.log('Add');
  }

  revisePrescroptions(){
    console.log('Revise');
  }

  /**
   * 刪除處方
   * @param rowIndex
   */
  deletePrescroptions(rowIndex: any) {
    if (!this.deletedRows.includes(rowIndex)) {
      this.deletedRows.push(rowIndex);
    } else if (this.deletedRows.includes(rowIndex)) {
      let temp = 0
      temp = this.deletedRows.indexOf(rowIndex);
      this.deletedRows.splice(temp, 1);
    }
  }


  getStates(state:number){
    switch(state){
      case 1:
        return '#FEE9D1';
        // return 'add-row';
      case 2:
        return '#DBE5E1';
        // return 'revise-row';
      case 3:
        return 'rgba(19, 20, 20, 0.38)';
      default:
        return ''
    }
  }

}
