import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-test-splitter',
  standalone: true,
  imports: [CommonModule,SplitterModule],
  templateUrl: './test-splitter.component.html',
  styleUrls: ['./test-splitter.component.scss']
})
export class TestSplitterComponent {

}
