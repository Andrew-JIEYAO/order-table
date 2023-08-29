import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule,CheckboxModule,TableModule,FormsModule],
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent {

  @Input() examList: Array<any> = [];

}
