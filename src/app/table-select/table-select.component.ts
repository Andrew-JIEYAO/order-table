import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestTableService } from '../test-table/test-table.service';
import { Prescriptions } from '../test-table/prescriptions.interface';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table-select',
  standalone: true,
  imports: [CommonModule,TableModule,CheckboxModule,ButtonModule],
  templateUrl: './table-select.component.html',
  styleUrls: ['./table-select.component.scss'],
  providers:[TestTableService]
})
export class TableSelectComponent implements OnInit{
  prescriptions: Prescriptions[] = [];
  testTableService = inject(TestTableService);

  selectedPrescriptions!: Prescriptions;
target: any;

  ngOnInit(): void {
    this.testTableService.getPrescription().then((result) => {
      this.prescriptions = result
    })

  }

}
