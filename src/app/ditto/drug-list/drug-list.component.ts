import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drug-list',
  standalone: true,
  imports: [CommonModule,TableModule,CheckboxModule,FormsModule],
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.scss']
})
export class DrugListComponent {

  @Input() drugList:Array<any> = [];

}
