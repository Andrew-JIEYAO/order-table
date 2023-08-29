import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestSplitterComponent } from './test-splitter/test-splitter.component';
import { TestTableComponent } from './test-table/test-table.component';
import { TableSelectComponent } from './table-select/table-select.component';
import { HealthInfoComponent } from './health-info/health-info.component';
import { ButtonModule } from 'primeng/button';
import { TestDataviewComponent } from './test-dataview/test-dataview.component';
import { DropdownModule } from 'primeng/dropdown';
import { TestTimelineComponent } from './test-timeline/test-timeline.component';
import { ImageListComponent } from './image-list/image-list.component';
import { DittoComponent } from './ditto/ditto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TestSplitterComponent,
    TestTableComponent,
    TableSelectComponent,
    HealthInfoComponent,
    ButtonModule,HealthInfoComponent,
    TestDataviewComponent,DropdownModule,TestTimelineComponent,
    ImageListComponent,
    DittoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '0801primeng';
}
