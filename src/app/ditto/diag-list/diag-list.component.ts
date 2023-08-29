import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diag-list',
  standalone: true,
  imports: [CommonModule,TableModule,CheckboxModule,FormsModule],
  templateUrl: './diag-list.component.html',
  styleUrls: ['./diag-list.component.scss']
})
export class DiagListComponent {


  @Input() diagList!: Array<any>;

  data = true


}
